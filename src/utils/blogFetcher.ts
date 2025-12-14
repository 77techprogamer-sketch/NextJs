"use client";

import { JSDOM } from 'jsdom';

interface BlogPost {
  title: string;
  url: string;
  summary: string;
}

// Utility function to decode HTML entities
const decodeHtmlEntities = (html: string): string => {
  const doc = new JSDOM().window.document;
  const div = doc.createElement('div');
  div.innerHTML = html;
  return div.textContent || '';
};

export const fetchBlogPosts = async (): Promise<BlogPost | null> => {
  try {
    const response = await fetch('/api/fetch-blog-posts');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    if (data && data.posts && data.posts.length > 0) {
      // Sort posts by date to ensure we get the latest one
      const sortedPosts = data.posts.sort((a: any, b: any) => {
        const dateA = new Date(a.pubDate);
        const dateB = new Date(b.pubDate);
        return dateB.getTime() - dateA.getTime(); // Descending order
      });

      const latestPost = sortedPosts[0];

      return {
        title: latestPost.title,
        url: latestPost.link,
        summary: decodeHtmlEntities(latestPost.description), // Decode HTML entities here
      };
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    return null;
  }
};