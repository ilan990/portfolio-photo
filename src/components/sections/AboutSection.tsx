'use client';

import { motion } from 'framer-motion';
import { MotionDiv } from '../ui/MotionDiv';
import { CameraIcon, CodeBracketIcon, SparklesIcon } from '@heroicons/react/24/outline';

const values = [
  {
    icon: CameraIcon,
    title: "Expertise Photo",
    description: "Une compréhension approfondie des besoins spécifiques des photographes professionnels."
  },
  {
    icon: CodeBracketIcon,
    title: "Excellence Technique",
    description: "Des solutions web modernes et performantes pour une expérience utilisateur optimale."
  },
  {
    icon: SparklesIcon,
    title: "Design Sur Mesure",
    description: "Chaque site est unique et reflète parfaitement l'identité du photographe."
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold mb-6">À Propos</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Développeur web passionné, je me suis spécialisé dans la création de sites web pour photographes. 
              Mon objectif est de donner aux photographes professionnels les outils numériques dont ils ont besoin 
              pour mettre en valeur leur travail et développer leur activité.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Chaque projet est une opportunité de créer une expérience unique, alliant performance technique 
              et design élégant, pour que vos photos captent toute l'attention qu'elles méritent.
            </p>
          </MotionDiv>

          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-6"
          >
            {values.map((value, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-black p-3 rounded-lg">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
