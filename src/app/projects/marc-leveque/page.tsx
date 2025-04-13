'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function MarcLevequePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link 
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Retour au portfolio
          </Link>

          <h1 className="text-4xl font-bold mb-6">Marc Leveque Photography</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Un portfolio élégant et minimaliste pour un photographe d'architecture,
              mettant en valeur ses œuvres à travers une expérience utilisateur fluide et immersive.
            </p>

            <div className="relative aspect-video mb-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/portfolio/marc-leveque.svg"
                alt="Aperçu du portfolio de Marc Leveque"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Technologies utilisées</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {[
                'Next.js 14',
                'TypeScript',
                'Tailwind CSS',
                'Framer Motion',
                'Responsive Design',
                'SEO Optimisé'
              ].map((tech) => (
                <li
                  key={tech}
                  className="bg-gray-50 px-4 py-2 rounded-lg text-center"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-6">Fonctionnalités clés</h2>
            <ul className="space-y-4 mb-12">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 mt-1"
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
                <span>Galerie de projets avec filtrage par catégorie</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 mt-1"
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
                <span>Animations fluides et transitions élégantes</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-green-500 mr-3 mt-1"
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
                <span>Design responsive et optimisé pour tous les appareils</span>
              </li>
            </ul>

            <div className="text-center mt-12">
              <a
                href="/projects/marc-leveque"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors"
              >
                Voir le projet
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
