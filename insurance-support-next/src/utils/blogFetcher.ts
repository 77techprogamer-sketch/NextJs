import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  title: string;
  url: string;
  date: string;
  summary: string;
  debug?: unknown; // Optional debug info
}

// Client-side helper to ensure safe HTML rendering
// Uses DOMParser to parse and whitelist specific tags
const sanitizeHtml = (html: string): string => {
  if (!html) return "";

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const body = doc.body;

    // Allowed tags
    const allowedTags = new Set([
      'P', 'BR', 'B', 'I', 'EM', 'STRONG', 'U', 'UL', 'OL', 'LI',
      'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'BLOCKQUOTE', 'CODE', 'PRE'
    ]);

    // Recursive function to clean nodes
    const cleanNode = (node: Node) => {
      // Handle text nodes
      if (node.nodeType === Node.TEXT_NODE) {
        return;
      }

      // Process children first
      // working backwards since we might remove nodes
      for (let i = node.childNodes.length - 1; i >= 0; i--) {
        cleanNode(node.childNodes[i]);
      }

      // Handle element nodes
      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element;

        // Checking if the tag is allowed
        if (!allowedTags.has(el.tagName)) {
          // If not allowed, replace with its text content
          // We process children first to preserve their text
          while (el.firstChild) {
            el.parentNode?.insertBefore(el.firstChild, el);
          }
          el.parentNode?.removeChild(el);
        } else {
          // If allowed, strip all attributes
          while (el.attributes.length > 0) {
            el.removeAttribute(el.attributes[0].name);
          }
        }
      }
    }

    // Process all children of body
    // working backwards since we might remove nodes
    for (let i = body.childNodes.length - 1; i >= 0; i--) {
      cleanNode(body.childNodes[i]);
    }

    return body.innerHTML;

  } catch (e) {
    console.warn("Failed to sanitize HTML client-side:", e);
    // Fallback: simple aggressive regex strip on original if DOMParser fails
    return html.replace(/<[^>]*>?/gm, '').trim();
  }
};

export const fetchBlogPosts = async (serviceType?: string, language: string = 'en'): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase.functions.invoke('fetch-blog-posts', {
      body: { serviceType, language }
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
        summary: sanitizeHtml(data.post.description),
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
        summary: sanitizeHtml(first.description || first.summary)
      };
    }

    return null;

  } catch (error) {
    console.error('An error occurred fetching blog posts:', error);
    return null;
  }
};