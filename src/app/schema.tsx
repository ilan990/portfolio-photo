export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'PhotographyBusiness',
  name: 'Marc Leveque - Photographe d\'Architecture',
  description: 'Photographe spécialisé en architecture et design d\'intérieur. Une approche minimaliste et géométrique pour capturer l\'essence des espaces.',
  url: 'https://marcleveque.com',
  founder: {
    '@type': 'Person',
    name: 'Marc Leveque',
    jobTitle: 'Photographe d\'Architecture',
    sameAs: [
      'https://linkedin.com/in/marc-leveque',
      'https://instagram.com/marc.leveque'
    ]
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'FR',
    addressLocality: 'Paris',
    postalCode: '75011'
  },
  priceRange: '€€€',
  knowsAbout: [
    'Photographie d\'Architecture',
    'Photographie d\'Intérieur',
    'Photographie Immobilière',
    'Design d\'Intérieur',
    'Architecture Contemporaine'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services de photographie d\'architecture',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Photographie Résidentielle',
        description: 'Shooting photo pour maisons et appartements de luxe'
      },
      {
        '@type': 'Offer',
        name: 'Photographie Commerciale',
        description: 'Shooting photo pour bureaux, hôtels et espaces commerciaux'
      },
      {
        '@type': 'Offer',
        name: 'Photographie Éditoriale',
        description: 'Shooting photo pour magazines d\'architecture et de design'
      }
    ]
  },
  image: [
    'https://marcleveque.com/images/portfolio/residential/1.jpg',
    'https://marcleveque.com/images/portfolio/commercial/1.jpg',
    'https://marcleveque.com/images/portfolio/editorial/1.jpg'
  ],
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566,
      longitude: 2.3522
    },
    geoRadius: '500km'
  }
};
