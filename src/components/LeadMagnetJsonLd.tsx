export function LeadMagnetJsonLd({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url: string;
}) {
  const articleLd: any = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: 'Hari Kotian',
      url: 'https://insurancesupport.online/about-hari-kotian',
      jobTitle: 'Certified Insurance Advisor',
      worksFor: {
        '@type': 'Organization',
        name: 'Insurance Support',
      },
    },
    publisher: {
      '@type': 'Organization',
      name: 'Insurance Support',
      logo: {
        '@type': 'ImageObject',
        url: 'https://insurancesupport.online/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished: '2026-01-01T08:00:00+05:30',
    dateModified: new Date().toISOString(),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
    />
  );
}
