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
  const original = html;
  try {
    // 1. Decode HTML entities using a textarea (standard browser trick)
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    const decoded = txt.value;

    // 2. Strip tags using regex
    const stripped = decoded.replace(/<[^>]*>?/gm, '');
    const final = stripped.trim();

    console.log('[HTML_CLEANER] In:', original.substring(0, 20), '... | Decoded:', decoded.substring(0, 20), '... | Out:', final.substring(0, 20), '...');
    return final;
  } catch (e) {
    console.warn("Failed to strip HTML tags client-side:", e);
    // Fallback: simple regex strip on original
    return html.replace(/<[^>]*>?/gm, '');
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