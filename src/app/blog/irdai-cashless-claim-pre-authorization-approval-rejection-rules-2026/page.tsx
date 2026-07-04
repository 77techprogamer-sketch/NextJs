import { getStaticTranslation } from 'next-i18next/serverSideTranslations';

interface ArticleProps {
  title: string;
  content: string;
  faqSchema: {
    '@context': string;
    '@type': string;
    mainEntity: Array<{
      '@type': string;
      name: string;
      acceptedAnswer: {
        '@type': string;
        text: string;
      };
    }>;
  };
}

export async function getStaticProps({ locale }: { locale: string }) {
  const { t } = await getStaticTranslation(locale, 'common');

  const article: ArticleProps = {
    title: t('irdai-cashless-claim-pre-authorization-approval-rejection-rules-2026-title'),
    content: t('irdai-cashless-claim-pre-authorization-approval-rejection-rules-2026-content'),
    faqSchema: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: t('irdai-cashless-claim-pre-authorization-approval-rejection-rules-2026-faq1-question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('irdai-cashless-claim-pre-authorization-approval-rejection-rules-2026-faq1-answer'),
          },
        },
        // Add more FAQ items as needed
      ],
    },
  };

  return {
    props: {
      ...article,
      _nextI18Next: {
        initialLocale: locale,
      },
    },
  };
}

export default function Article({ title, content, faqSchema }: ArticleProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}