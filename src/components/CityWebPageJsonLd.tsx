export function CityWebPageJsonLd({
  title,
  description,
  url,
  city,
  state,
}: {
  title: string;
  description: string;
  url: string;
  city?: string;
  state?: string;
}) {
  const webPageLd: any = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description: description,
    url: url,
    isPartOf: {
      '@id': 'https://insurancesupport.online/#website',
    },
    about: {
      '@type': 'Service',
      name: `Insurance Services in ${city}`,
      description: description,
      areaServed: {
        '@type': 'City',
        name: city,
        containedInPlace: {
          '@type': 'State',
          name: state,
        },
      },
      provider: {
        '@id': 'https://insurancesupport.online/#organization',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
    />
  );
}
