'use client';

import { CheckIcon } from '@heroicons/react/24/outline';
import { MotionDiv } from '../ui/MotionDiv';
import { MotionLink } from '../ui/MotionLink';

const tiers = [
  {
    name: 'Essential',
    price: '2500€',
    description: 'La solution idéale pour démarrer votre présence en ligne.',
    features: [
      'Site web responsive sur mesure',
      'Galerie photo optimisée',
      'Intégration des réseaux sociaux',
      'Formulaire de contact',
      'Optimisation SEO de base',
      'Support technique (1 mois)',
    ],
  },
  {
    name: 'Pro',
    price: '3500€',
    description: 'Pour les photographes qui veulent se démarquer.',
    features: [
      'Tout ce qui est inclus dans Essential',
      'Design premium personnalisé',
      'Galerie avancée avec filtres',
      'Blog intégré',
      'Système de réservation simple',
      'Optimisation SEO avancée',
      'Support technique (3 mois)',
    ],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '5000€+',
    description: 'Une solution complète pour les professionnels exigeants.',
    features: [
      'Tout ce qui est inclus dans Pro',
      'Design exclusif sur mesure',
      'Galerie avec gestion des droits',
      'Espace client privé',
      'Système de réservation avancé',
      'Stratégie SEO complète',
      'Support technique (6 mois)',
      'Formation personnalisée',
    ],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Tarifs Transparents</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions adaptées à vos besoins, avec un investissement clair pour votre réussite en ligne
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {tiers.map((tier, index) => (
            <MotionDiv
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl ${
                tier.highlighted
                  ? 'bg-black text-white shadow-xl scale-105'
                  : 'bg-white text-gray-900 shadow-md'
              }`}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="mt-2 mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                </div>
                <p className={`mb-8 ${tier.highlighted ? 'text-gray-300' : 'text-gray-500'}`}>
                  {tier.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckIcon className={`w-5 h-5 mr-3 flex-shrink-0 ${
                        tier.highlighted ? 'text-white' : 'text-black'
                      }`} />
                      <span className={tier.highlighted ? 'text-gray-300' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <MotionLink
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-4 px-8 rounded-lg text-center font-medium transition-colors ${
                  tier.highlighted
                    ? 'bg-white text-black hover:bg-gray-100'
                    : 'bg-black text-white hover:bg-gray-900'
                }`}
              >
                Commencer
              </MotionLink>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
