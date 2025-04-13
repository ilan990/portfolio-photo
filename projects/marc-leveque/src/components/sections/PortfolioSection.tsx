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
    <section className="w-full min-h-screen bg-white py-24">
      <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {/* En-tête */}
          <header className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-light tracking-tight mb-6">Portfolio</h2>
            <p className="text-gray-600">
              Une sélection de projets architecturaux capturés à travers mon objectif
            </p>
          </header>

          {/* Filtres */}
          <nav className="flex justify-center space-x-8">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`text-lg transition-colors duration-200 ${
                selectedCategory === 'all'
                  ? 'text-black'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              Tous
            </button>
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`text-lg transition-colors duration-200 ${
                  selectedCategory === category.value
                    ? 'text-black'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </nav>

          {/* Grille de projets */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group"
                >
                  <Link href={`/portfolio/${project.slug}`} className="block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                      <Image
                        src={project.coverImage}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
                    </div>
                    <div className="mt-4 space-y-2">
                      <h3 className="text-lg font-light">{project.title}</h3>
                      <p className="text-sm text-gray-600">{project.location}</p>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
