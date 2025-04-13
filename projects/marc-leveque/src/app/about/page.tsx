'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
        >
          <div className="relative aspect-[4/5] lg:sticky lg:top-8">
            <Image
              src="/about/portrait.jpg"
              alt="Marc Lévêque"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-12">
            <div>
              <h1 className="text-4xl font-light mb-8 tracking-tight">À propos</h1>
              <div className="prose prose-lg">
                <p>
                  Photographe d'architecture basé à Paris, je me spécialise dans la capture 
                  d'espaces architecturaux contemporains. Mon approche minimaliste met en 
                  valeur la pureté des lignes, le jeu des volumes et la chorégraphie de 
                  la lumière naturelle.
                </p>
                
                <p>
                  Formé initialement en architecture, j'ai développé un œil aiguisé pour 
                  la composition spatiale et une compréhension approfondie des intentions 
                  des architectes. Cette double expertise me permet de traduire visuellement 
                  l'essence de chaque projet.
                </p>

                <h2 className="text-2xl font-light mt-12 mb-6">Approche</h2>
                <p>
                  Ma démarche photographique s'articule autour de trois principes fondamentaux :
                </p>
                <ul>
                  <li>La géométrie comme langage visuel</li>
                  <li>La lumière naturelle comme révélateur d'espace</li>
                  <li>Le minimalisme comme expression de l'essentiel</li>
                </ul>

                <h2 className="text-2xl font-light mt-12 mb-6">Équipement</h2>
                <p>
                  Je travaille avec du matériel haut de gamme adapté aux exigences de 
                  la photographie d'architecture :
                </p>
                <ul>
                  <li>Appareil moyen format numérique Phase One</li>
                  <li>Objectifs à décentrement pour le contrôle des perspectives</li>
                  <li>Éclairage professionnel pour la maîtrise des contrastes</li>
                </ul>

                <h2 className="text-2xl font-light mt-12 mb-6">Clients</h2>
                <p>
                  Je collabore régulièrement avec des architectes, des promoteurs immobiliers, 
                  des magazines d'architecture et des agences de design d'intérieur. Chaque 
                  projet est une nouvelle opportunité de raconter une histoire à travers 
                  l'espace et la lumière.
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-xl font-light mb-4">Publications</h3>
              <ul className="space-y-4 text-gray-600">
                <li>Architectural Digest France - 2024</li>
                <li>Elle Décoration - 2023</li>
                <li>AD Collector - 2023</li>
                <li>Architecture à Vivre - 2022</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
