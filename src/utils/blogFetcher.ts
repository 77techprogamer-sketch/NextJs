import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  title: string;
  url: string;
  date: string;
}

// Map service slugs to keywords that might appear in blog post titles
const serviceKeywordMap: Record<string, string[]> = {
  "life-insurance": ["Life Insurance", "Life Cover", "Jeevan Bima"],
  "health-insurance": ["Health Insurance", "Medical Insurance", "Swasthya Bima"],
  "term-insurance": ["Term Insurance", "Term Plan"],
  "motor-insurance": ["Motor Insurance", "Car Insurance", "Vehicle Insurance"],
  "sme-insurance": ["SME Insurance", "Business Insurance", "Fire Insurance", "Home Insurance"],
  "travel-insurance": ["Travel Insurance", "Trip Insurance"],
  "pension-plans": ["Pension Plans", "Retirement Plans"],
  "ulip-plans": ["ULIP Plans", "Unit Linked Insurance"],
  "wedding-insurance": ["Wedding Insurance", "Honeymoon Insurance"],
  "cyber-insurance": ["Cyber Insurance", "Cyber Security"],
};

export const fetchBlogPosts = async (serviceTypeSlug: string): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase.functions.invoke('fetch-blog-posts');

    if (error) {
      console.error('Error invoking Edge Function:', error.message);
      return [];
    }

    if (!data || !Array.isArray(data)) {
      console.error('Invalid data received from Edge Function:', data);
      return [];
    }

    const allPosts: BlogPost[] = data;
    const keywords = serviceKeywordMap[serviceTypeSlug.toLowerCase()] || [];

    const filteredPosts = allPosts.filter(post => {
      const postTitleLower = post.title.toLowerCase();
      return keywords.some(keyword => postTitleLower.includes(keyword.toLowerCase()));
    });

    // Sort by date to get the latest
    return filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  } catch (error) {
    console.error('An error occurred fetching blog posts:', error);
    return [];
  }
};