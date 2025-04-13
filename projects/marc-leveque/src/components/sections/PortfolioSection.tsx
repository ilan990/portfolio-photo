'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project, ProjectCategory } from '@/types/project';
import { projects } from '@/data/projects';

const categories: { value: ProjectCategory; label: string }[] = [
  { value: 'residential', label: 'Résidentiel' },
  { value: 'commercial', label: 'Commercial' },
  { value: 'editorial', label: 'Éditorial' },
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'all'>('all');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="section bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Portfolio</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une sélection de projets architecturaux capturés à travers mon objectif,
            mettant en valeur la beauté des espaces et des formes.
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`btn ${
              selectedCategory === 'all'
                ? 'bg-primary text-white'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Tous les projets
          </button>
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value)}
              className={`btn ${
                selectedCategory === category.value
                  ? 'bg-primary text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <motion.div
          layout
          className="grid-gallery"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] group"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Link href={`/portfolio/${project.slug}`}>
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-white text-2xl font-playfair mb-2">{project.title}</h3>
                      <p className="text-gray-200 text-center">{project.shortDescription}</p>
                      <span className="mt-4 inline-block px-6 py-2 border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300">
                        Voir le projet
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
