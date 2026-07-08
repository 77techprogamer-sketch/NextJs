import { getStaticTranslation } from 'next-i18next/serverSideTranslations';

export async function generateMetadata({ params: { slug } }) {
  const { t } = await getStaticTranslation('en', ['blog']);
  
  return {
    title: t(`blog:${slug}.title`),
    description: t(`blog:${slug}.description`),
    openGraph: {
      title: t(`blog:${slug}.title`),
      description: t(`blog:${slug}.description`),
    },
  };
}

export default async function BlogPage({ params: { slug } }) {
  const { t } = await getStaticTranslation('en', ['blog']);
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t(`blog:${slug}.title`)}</h1>
      <article className="prose lg:prose-xl">
        <h2>{t(`blog:${slug}.section1.title`)}</h2>
        <p>{t(`blog:${slug}.section1.content`)}</p>
        
        <h2>{t(`blog:${slug}.section2.title`)}</h2>
        <p>{t(`blog:${slug}.section2.content`)}</p>
        
        <h2>{t(`blog:${slug}.faq.title`)}</h2>
        <div itemScope itemType="https://schema.org/FAQPage">
          {t(`blog:${slug}.faq.questions`, { returnObjects: true }).map((faq, index) => (
            <div key={index} itemProp="mainEntity" itemScope itemType="https://schema.org/Question">
              <h3 itemProp="name">{faq.question}</h3>
              <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                <p itemProp="text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}
