import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  title: string;
  url: string;
  date: string;
  summary: string;
  debug?: unknown; // Optional debug info
}

// Client-side helper to ensure no HTML tags leak through
// Uses a robust strategy: textarea for decoding -> Regex for stripping
const stripHtmlTags = (html: string): string => {
  if (!html) return "";
  try {
    // 1. Decode HTML entities using a textarea (standard browser trick)
    // We do it twice to handle double-encoded entities like &amp;lt;b&amp;gt;
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    let decoded = txt.value;

    // Second pass for double encoding (rare but happens in some RSS feeds)
    if (decoded.includes('&')) {
      txt.innerHTML = decoded;
      decoded = txt.value;
    }

    // 2. Aggressive strip tags using regex
    // The regex /<[^>]*>?/gm handles most tags, even unclosed ones at the end
    const stripped = decoded.replace(/<[^>]*>?/gm, '');

    // 3. Final cleanup of common entities that regex might miss or that remain after stripping
    const final = stripped
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .trim();

    return final;
  } catch (e) {
    console.warn("Failed to strip HTML tags client-side:", e);
    // Fallback: simple aggressive regex strip on original
    return html.replace(/<[^>]*>?/gm, '').replace(/&lt;[^&]*&gt;/gm, '').trim();
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