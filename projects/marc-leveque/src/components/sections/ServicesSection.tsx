'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: 'Architecture Résidentielle',
    description: 'Capturez l\'essence de votre projet résidentiel à travers des images qui mettent en valeur les volumes, la lumière et les détails architecturaux.',
    features: [
      'Maisons individuelles',
      'Appartements de luxe',
      'Villas & Résidences',
      'Espaces extérieurs'
    ],
    image: '/services/residential.jpg'
  },
  {
    title: 'Architecture Commerciale',
    description: 'Des photographies professionnelles qui subliment vos espaces commerciaux et valorisent votre investissement immobilier.',
    features: [
      'Bureaux & Espaces de travail',
      'Hôtels & Restaurants',
      'Commerces & Boutiques',
      'Bâtiments institutionnels'
    ],
    image: '/services/commercial.jpg'
  },
  {
    title: 'Photographie Éditoriale',
    description: 'Des images saisissantes pour magazines d\'architecture, publications spécialisées et supports de communication haut de gamme.',
    features: [
      'Magazines d\'architecture',
      'Publications design',
      'Portfolios d\'architectes',
      'Supports marketing'
    ],
    image: '/services/editorial.jpg'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une expertise photographique au service de l'architecture et du design,
            pour sublimer vos espaces et projets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-playfair mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-700">
                      <svg
                        className="w-5 h-5 text-accent mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-8">
            Chaque projet est unique et mérite une attention particulière.
            Contactez-moi pour discuter de vos besoins spécifiques.
          </p>
          <a
            href="#contact"
            className="btn btn-primary"
          >
            Demander un devis
          </a>
        </motion.div>
      </div>
    </section>
  );
}
