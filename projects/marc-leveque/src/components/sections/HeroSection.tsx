'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      {/* Image de fond avec effet parallaxe */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/projects/residence-lumiere/01.png"
          alt="Architecture minimaliste"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 w-full">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center text-white space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
              Marc Lévêque
            </h1>
            <p className="text-xl md:text-2xl font-light tracking-wide">
              Photographe d'architecture
            </p>
          </motion.div>
        </div>

        {/* Menu de navigation */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-16 w-full border-t border-white/20"
        >
         
        </motion.nav>
      </div>

      {/* Défilement */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-12 left-1/2 transform -translate-x-1/2"
      >
        
      </motion.div>
    </section>
  );
}