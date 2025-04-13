import { Project } from '@/types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Résidence Lumière',
    slug: 'residence-lumiere',
    category: 'residential',
    location: 'Paris 16e',
    date: '2024',
    client: 'Studio Architectes & Co',
    description: 'Une maison contemporaine baignée de lumière naturelle, où les volumes s\'entremêlent dans un jeu subtil d\'ombres et de transparences. Le projet met en valeur l\'interaction entre l\'intérieur et l\'extérieur, créant des espaces de vie fluides et lumineux.',
    shortDescription: 'Maison contemporaine aux volumes lumineux et épurés',
    coverImage: '/projects/residence-lumiere/01.png',
    images: [
      {
        src: '/projects/residence-lumiere/01.png',
        alt: 'Façade minimaliste avec grandes baies vitrées',
        width: 1920,
        height: 1280
      },
      {
        src: '/projects/residence-lumiere/02.png',
        alt: 'Escalier sculptural en béton et verre',
        width: 1920,
        height: 1280
      },
      {
        src: '/projects/residence-lumiere/03.png',
        alt: 'Salon ouvert avec double hauteur',
        width: 1920,
        height: 1280
      }
    ],
    tags: ['Architecture résidentielle', 'Minimalisme', 'Lumière naturelle'],
    metadata: {
      title: 'Résidence Lumière | Photographie d\'architecture par Marc Leveque',
      description: 'Découvrez la Résidence Lumière, un projet de photographie d\'architecture mettant en valeur une maison contemporaine aux volumes épurés et baignée de lumière naturelle.'
    }
  },
  {
    id: '2',
    title: 'Tour Horizon',
    slug: 'tour-horizon',
    category: 'commercial',
    location: 'La Défense, Paris',
    date: '2024',
    client: 'Groupe Immobilier Prestige',
    description: 'Un gratte-ciel de bureaux qui redéfinit la skyline de La Défense. La façade en verre et acier crée des reflets changeants tout au long de la journée, tandis que l\'intérieur offre des espaces de travail modernes et flexibles.',
    shortDescription: 'Tour de bureaux aux lignes audacieuses et réfléchissantes',
    coverImage: '/projects/tour-horizon/cover.png',
    images: [
      {
        src: '/projects/tour-horizon/01.png',
        alt: 'Vue extérieure de la tour au coucher du soleil',
        width: 1920,
        height: 1280
      },
      {
        src: '/projects/tour-horizon/02.png',
        alt: 'Hall d\'entrée monumental',
        width: 1920,
        height: 1280
      },
      {
        src: '/projects/tour-horizon/03.png',
        alt: 'Espace de travail collaboratif avec vue panoramique',
        width: 1920,
        height: 1280
      }
    ],
    tags: ['Architecture commerciale', 'Design urbain', 'Espaces de travail'],
    metadata: {
      title: 'Tour Horizon | Photographie d\'architecture par Marc Leveque',
      description: 'Explorez la Tour Horizon, un projet architectural audacieux à La Défense, capturé à travers l\'objectif de Marc Leveque, photographe d\'architecture.'
    }
  },
  {
    id: '3',
    title: 'Loft Industrial',
    slug: 'loft-industrial',
    category: 'editorial',
    location: 'Lyon',
    date: '2024',
    client: 'Magazine Design & Architecture',
    description: 'Un ancien entrepôt transformé en loft contemporain, où les éléments industriels d\'origine dialoguent avec des interventions modernes. Le projet met en valeur les matériaux bruts et la hauteur sous plafond exceptionnelle.',
    shortDescription: 'Reconversion d\'un espace industriel en habitat contemporain',
    coverImage: '/projects/loft-industrial/cover.jpg',
    images: [
      {
        src: '/projects/loft-industrial/01.png',
        alt: 'Espace de vie principal avec poutres métalliques apparentes',
        width: 1920,
        height: 1280
      },
      {
        src: '/projects/loft-industrial/02.png',
        alt: 'Cuisine ouverte avec îlot en béton',
        width: 1920,
        height: 1280
      },
      {
        src: '/projects/loft-industrial/03.png',
        alt: 'Mezzanine avec bibliothèque sur mesure',
        width: 1920,
        height: 1280
      }
    ],
    tags: ['Loft', 'Design industriel', 'Rénovation'],
    metadata: {
      title: 'Loft Industrial | Photographie d\'architecture par Marc Leveque',
      description: 'Découvrez la transformation d\'un ancien entrepôt en loft contemporain, un reportage photographique mettant en valeur le mariage entre patrimoine industriel et design moderne.'
    }
  }
];
