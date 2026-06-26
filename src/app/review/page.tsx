import { Metadata } from "next";
import { getStaticTranslation } from "@/lib/i18n-server";

export async function generateMetadata(): Promise<Metadata> {
    const { t } = getStaticTranslation();
    return {
        title: "Review Insurance Support | Hari Kotian LIC Advisor Bangalore",
        description: "Leave a review for Insurance Support on Google. Your feedback helps other families find trusted insurance advisory services in Bangalore and across India.",
        openGraph: {
            title: "Review Insurance Support | Hari Kotian LIC Advisor Bangalore",
            description: "Leave a review for Insurance Support on Google. Your feedback helps other families find trusted insurance advisory services.",
            type: "website",
        },
    };
}

export default async function ReviewPage() {
    const { t } = getStaticTranslation();
    const gbpReviewUrl = "https://g.page/r/CRDgJanrKjRhEBM/review";

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4 py-16 max-w-2xl">
                <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 text-center">
                    {/* Google Logo */}
                    <div className="flex justify-center mb-6">
                        <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                            <svg className="w-12 h-12" viewBox="0 0 24 24">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                            </svg>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold mb-4">We Value Your Feedback</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        Your review helps other families find trusted insurance advisory services. If we&apos;ve helped you with your LIC policy, claim recovery, or insurance needs, please take a moment to share your experience.
                    </p>

                    {/* Star Rating Visual */}
                    <div className="flex justify-center gap-2 mb-8">
                        {[1,2,3,4,5].map(i => (
                            <svg key={i} className="w-10 h-10 text-yellow-400" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href={gbpReviewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-105 shadow-lg"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"/>
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"/>
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"/>
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="currentColor"/>
                        </svg>
                        Write a Google Review
                    </a>

                    <p className="text-sm text-slate-500 mt-6">
                        You&apos;ll be redirected to Google to write your review. Thank you for your support!
                    </p>
                </div>

                {/* Trust Signals */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-primary mb-1">1,000+</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Families Helped</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-primary mb-1">25+</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 text-center shadow-sm">
                        <div className="text-3xl font-bold text-primary mb-1">98%</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400">Claim Success Rate</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
