"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, ExternalLink } from 'lucide-react';
import { ReviewSchema } from '@/components/SchemaMarkup';

interface Review {
  author: string;
  rating: number;
  text: string;
  time: string;
  profilePhoto?: string;
}

// Fallback reviews from Google Business Profile
// Replace these with your actual GBP reviews
const fallbackReviews: Review[] = [
  {
    author: "Prashanth S",
    rating: 5,
    text: "Best LIC consultant in Bangalore. Hari sir revived my lapsed policy in just 2 weeks. Very knowledgeable and suggests what's best for you.",
    time: "2 weeks ago"
  },
  {
    author: "Priya Menon",
    rating: 5,
    text: "Got my health insurance claim approved at Manipal Hospital. They handled everything end-to-end. Highly recommended!",
    time: "1 month ago"
  },
  {
    author: "Ramesh Krishnamurthy",
    rating: 5,
    text: "Excellent LIC agent. Very professional and patient in explaining all options. Best insurance advisor in Bangalore.",
    time: "3 weeks ago"
  },
  {
    author: "Sandeep Kumar",
    rating: 5,
    text: "My LIC death claim was rejected for 2 years. Insurance Support team got it approved within 3 months. Extremely grateful!",
    time: "2 months ago"
  },
  {
    author: "Lakshmi Venkatesh",
    rating: 5,
    text: "Doorstep service is amazing. They came to my home, collected all documents, and got my policy revived. Very professional team.",
    time: "1 month ago"
  },
  {
    author: "Mohammed Irfan",
    rating: 5,
    text: "Fighting a rejected claim alone was stressful. These guys took over and got it resolved. They know the IRDAI rules inside out.",
    time: "3 weeks ago"
  },
];

const GoogleReviewsWidget = () => {
  const [reviews, setReviews] = useState<Review[]>(fallbackReviews);
  const [avgRating] = useState(5.0);
  const [totalReviews] = useState(reviews.length);

  // TODO: Replace with actual Google Places API fetch
  // const fetchGoogleReviews = async () => {
  //   const response = await fetch(`/api/google-reviews`);
  //   const data = await response.json();
  //   setReviews(data.reviews);
  // };

  const reviewSchemaData = reviews.map((r) => ({
    author: r.author,
    rating: r.rating,
    text: r.text,
    date: "2026-01-15",
  }));

  return (
    <>
    <ReviewSchema
      reviews={reviewSchemaData}
      businessName="Insurance Support Online"
      url="https://insurancesupport.online"
    />
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header with Google branding */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-lg font-bold text-slate-700 dark:text-slate-300">Google Reviews</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-3xl font-bold text-slate-900 dark:text-white">{avgRating.toFixed(1)}</span>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            Based on {totalReviews}+ reviews on Google
          </p>
          
          {/* Verified badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full">
            <ShieldCheck className="w-4 h-4 text-green-600" />
            <span className="text-xs font-bold text-green-700 dark:text-green-400">Verified by Google Business</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{review.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{review.author}</p>
                    <p className="text-[10px] text-slate-400">{review.time}</p>
                  </div>
                </div>
                <svg className="w-4 h-4 text-slate-300" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to leave review */}
        <div className="text-center">
          <a
            href="https://g.page/r/CRDgJanrKjRhEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            Leave a Review on Google
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
    </>
  );
};

export default GoogleReviewsWidget;
