'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  coverImage: string;
  slug: string;
  shortDescription: string;
}

const projects: Project[] = [
  {
    id: "marc-leveque",
    title: "Marc Leveque Photography",
    category: "Photographe Architecture",
    description: "Portfolio élégant pour un photographe d'architecture, avec galerie dynamique et animations fluides.",
    coverImage: "/portfolio/marc-leveque.svg",
    slug: "marc-leveque",
    shortDescription: "Portfolio élégant pour un photographe d'architecture"
  },
  // ... vos autres projets
];

export default function PortfolioSection() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Réalisations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de sites web créés pour des photographes professionnels,
            chacun conçu pour répondre à leurs besoins spécifiques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-gray-500 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600">{project.shortDescription}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
