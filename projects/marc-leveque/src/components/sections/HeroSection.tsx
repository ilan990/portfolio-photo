'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MotionLink } from '../ui/MotionLink';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image d'arrière-plan avec effet parallaxe */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-architecture.jpg"
          alt="Photographie architecturale minimaliste"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenu principal */}
      <div className="container relative z-10 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight">
            Marc Leveque
            <span className="block text-2xl md:text-3xl font-sans font-light mt-4">
              Photographe d'Architecture
            </span>
          </h1>
          
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
            Capturer l'essence des espaces à travers une approche minimaliste,
            où la lumière et la géométrie se rencontrent pour raconter l'histoire de l'architecture.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <MotionLink
              href="#portfolio"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
              aria-label="Découvrir mon portfolio"
            >
              Découvrir mon portfolio
            </MotionLink>
            <MotionLink
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
              aria-label="Me contacter pour votre projet"
            >
              Me contacter
            </MotionLink>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}