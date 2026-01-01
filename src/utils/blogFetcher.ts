import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  title: string;
  url: string;
  date: string;
  summary: string; // Added summary field
}

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
        summary: data.post.description,
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
        summary: first.description || first.summary
      };
    }

    return null;

  } catch (error) {
    console.error('An error occurred fetching blog posts:', error);
    return null;
  }
};