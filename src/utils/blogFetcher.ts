import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  title: string;
  url: string;
  date: string;
  summary: string; // Added summary field
}

export const fetchBlogPosts = async (serviceType?: string): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase.functions.invoke('fetch-blog-posts');

    if (error) {
      console.error('Error invoking Edge Function:', error.message);
      return null;
    }

    if (!data || !Array.isArray(data) || data.length === 0) {
      console.warn('No blog posts or invalid data received from Edge Function.');
      return null;
    }

    const allPosts: BlogPost[] = data;

    // Sort all posts by date to get the absolute latest
    const sortedPosts = allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Return only the single latest post
    return sortedPosts[0];

  } catch (error) {
    console.error('An error occurred fetching blog posts:', error);
    return null;
  }
};