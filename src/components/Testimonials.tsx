import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const testimonials = [
    {
        name: "Prashanth S",
        rating: 5,
        text: "Best LIC consultant. Highly recommended person. Has indepth knowledge and suggests best required for individual as per your capacity."
    },
    {
        name: "Naveen Kumar",
        rating: 5,
        text: "Good response from him and very professional in approach."
    },
    {
        name: "R G LIKHITH",
        rating: 5,
        text: "Awesome place for all your insurance needs. Very helpful and knowledgeable staff."
    },
    {
        name: "Ayush Kandoi",
        rating: 5,
        text: "Had a very positive experience. The team is kind and provides excellent guidance for insurance planning."
    },
    {
        name: "Madhu Shivalingappa",
        rating: 5,
        text: "Great experience with the Life Insurance Agency. They make the complex process very simple."
    },
    {
        name: "Shankar",
        rating: 5,
        text: "Satisfied with the professionalism and service. Highly reliable Insurance support."
    },
    {
        name: "Kiran Kumar N",
        rating: 5,
        text: "Consistent service over a long time. A dependable partner for all insurance policies."
    },
    {
        name: "Gayathri Duraisamy",
        rating: 5,
        text: "Highly positive customer experience. Very patient in explaining the details."
    }
];

const Testimonials = () => {
    const { t } = useTranslation();

    return (
        <section id="testimonials" className="py-12 sm:py-16 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                        {t("customer_testimonials_title", "Customer Testimonials")}
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        {t("customer_testimonials_description", "What our clients say about our services and commitment to their financial security.")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={index}
                            className="relative border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-50 dark:bg-gray-900 group"
                        >
                            <CardHeader className="pb-2">
                                <div className="flex items-center gap-1 mb-2">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent className="pt-0">
                                <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4 group-hover:text-primary/40 transition-colors" />
                                <p className="text-gray-700 dark:text-gray-200 mb-6 italic text-sm sm:text-base leading-relaxed">
                                    "{testimonial.text}"
                                </p>
                                <div className="border-t border-slate-200 dark:border-gray-700 pt-4">
                                    <p className="font-bold text-gray-900 dark:text-white">{testimonial.name}</p>
                                    <p className="text-xs text-primary font-medium">{t("verified_client")}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
