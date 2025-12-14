"use client";


interface BlogPost {
  title: string;
  url: string;
  summary: string;
}

export const fetchBlogPosts = async (): Promise<BlogPost | null> => {
  try {
    // Directly call the Supabase Edge Function URL
    const response = await fetch('https://idzvdeemgxhwlkyphnel.supabase.co/functions/v1/fetch-blog-posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (data && data.posts && data.posts.length > 0) {
      // Sort posts by date to ensure we get the latest one
      const sortedPosts = data.posts.sort((a: any, b: any) => {
        const dateA = new Date(a.date); // Use 'date' field from Edge Function response
        const dateB = new Date(b.date);
        return dateB.getTime() - dateA.getTime(); // Descending order
      });

      const latestPost = sortedPosts[0];

      return {
        title: latestPost.title,
        url: latestPost.url,
        summary: latestPost.description, // Expecting already decoded HTML from Edge Function
      };
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return null;
  }
};