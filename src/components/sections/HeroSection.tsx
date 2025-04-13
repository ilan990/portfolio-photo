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
          src="/images/hero-bg.jpg"
          alt="Développement web pour photographes"
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ilan Assouline
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Développeur web spécialisé dans la création de sites pour photographes professionnels.
            Des solutions sur mesure qui mettent en valeur votre travail.
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
    </section>
  );
}