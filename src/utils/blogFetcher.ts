"use client";


interface BlogPost {
  title: string;
  url: string;
  summary: string;
}

export const fetchBlogPosts = async (serviceTypeSlug?: string): Promise<BlogPost | null> => {
  try {
    let url = 'https://idzvdeemgxhwlkyphnel.supabase.co/functions/v1/fetch-blog-posts';
    if (serviceTypeSlug) {
      url += `?serviceType=${encodeURIComponent(serviceTypeSlug)}`;
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    // Expecting a single 'post' object from the Edge Function
    if (data && data.post) {
      return {
        title: data.post.title,
        url: data.post.url,
        summary: data.post.description, // Expecting already decoded HTML from Edge Function
      };
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return null;
  }
};