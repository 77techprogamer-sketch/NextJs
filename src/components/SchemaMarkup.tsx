"use client";

import { useEffect } from 'react';

interface FAQSchemaProps {
  questions: { question: string; answer: string }[];
}

/**
 * Renders FAQPage JSON-LD structured data for Google rich snippets.
 * https://schema.org/FAQPage
 */
export function FAQSchema({ questions }: FAQSchemaProps) {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [questions]);

  return null;
}

interface ReviewSchemaProps {
  reviews: {
    author: string;
    rating: number;
    text: string;
    date?: string;
  }[];
  /** Name of the business being reviewed */
  businessName: string;
  /** URL of the page with the reviews */
  url?: string;
}

/**
 * Renders AggregateRating + Review JSON-LD structured data.
 * https://schema.org/AggregateRating
 * https://schema.org/Review
 */
export function ReviewSchema({ reviews, businessName, url }: ReviewSchemaProps) {
  useEffect(() => {
    if (reviews.length === 0) return;

    const avgRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      itemReviewed: {
        "@type": "Organization",
        name: businessName,
        url: url || "https://insurancesupport.online",
        logo: "https://insurancesupport.online/logo.png",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Bahubali Nagar, Jalahalli",
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: "560013",
          addressCountry: "IN",
        },
        telephone: "+91-9986634506",
      },
      ratingValue: avgRating.toFixed(1),
      bestRating: "5",
      worstRating: "1",
      reviewCount: reviews.length,
    };

    // Individual reviews
    const reviewNodes = reviews.map((r) => ({
      "@context": "https://schema.org",
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      datePublished: r.date || "2026-01-01",
      itemReviewed: {
        "@type": "Organization",
        name: businessName,
      },
    }));

    // Add aggregate as first script, then individual reviews
    const aggScript = document.createElement("script");
    aggScript.type = "application/ld+json";
    aggScript.innerHTML = JSON.stringify(schema);
    document.head.appendChild(aggScript);

    const reviewScripts: HTMLScriptElement[] = [];
    reviewNodes.forEach((node) => {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.innerHTML = JSON.stringify(node);
      document.head.appendChild(s);
      reviewScripts.push(s);
    });

    return () => {
      document.head.removeChild(aggScript);
      reviewScripts.forEach((s) => document.head.removeChild(s));
    };
  }, [reviews, businessName, url]);

  return null;
}
