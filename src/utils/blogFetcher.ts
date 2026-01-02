import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  title: string;
  url: string;
  date: string;
  summary: string;
  debug?: unknown; // Optional debug info
}

// Client-side helper to ensure no HTML tags leak through
// Uses a Double-Pass strategy: Decode -> Strip
const stripHtmlTags = (html: string): string => {
  if (!html) return "";
  try {
    const parser = new DOMParser();
    // First pass: Decode HTML entities.
    // If input is "&lt;b&gt;Text&lt;/b&gt;", this converts it to "<b>Text</b>"
    const decodedDoc = parser.parseFromString(`<body>${html}</body>`, 'text/html');
    const decodedText = decodedDoc ? (decodedDoc.body.textContent || "") : html;

    // Second pass: Strip actual HTML tags.
    // If input was "<b>Text</b>", this converts it to "Text"
    const cleanDoc = parser.parseFromString(`<body>${decodedText}</body>`, 'text/html');
    const finalText = cleanDoc ? (cleanDoc.body.textContent || "") : decodedText;

    return finalText.trim();
  } catch (e) {
    console.warn("Failed to strip HTML tags client-side:", e);
    return html;
  }
};

export const fetchBlogPosts = async (serviceType?: string): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase.functions.invoke('fetch-blog-posts', {
      body: { serviceType }
    });

    if (error) {
      console.error('Error invoking Edge Function:', error.message);
      return null;
    }

    if (!data) {
      console.warn('No data received from Edge Function.');
      return null;
    }

    // Handle single post response format: { post: { title, url, date, description } }
    if (data.post) {
      return {
        title: data.post.title,
        url: data.post.url,
        date: data.post.date,
        summary: stripHtmlTags(data.post.description),
        debug: data.debug // Capture the debug info
      };
    }

    // Fallback if data is an array (legacy or unexpected)
    if (Array.isArray(data) && data.length > 0) {
      const first = data[0];
      return {
        title: first.title,
        url: first.url,
        date: first.date,
        summary: stripHtmlTags(first.description || first.summary)
      };
    }

    return null;

  } catch (error) {
    console.error('An error occurred fetching blog posts:', error);
    return null;
  }
};