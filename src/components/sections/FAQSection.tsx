'use client';

import { useState } from 'react';
import { MotionDiv } from '../ui/MotionDiv';
import { MotionPresence } from '../ui/MotionPresence';
import { MotionContent } from '../ui/MotionContent';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: "Pourquoi les photographes ont-ils besoin d'un site dédié ?",
    answer: "Un site web dédié offre un contrôle total sur la présentation de votre travail, votre image de marque et l'expérience client. Contrairement aux plateformes génériques, il permet d'optimiser la présentation de vos photos, d'intégrer des fonctionnalités spécifiques et de créer une expérience unique pour vos clients."
  },
  {
    question: "Combien de temps faut-il pour créer un site portfolio ?",
    answer: "Le délai moyen est de 4 à 6 semaines, de la conception au lancement. Ce délai peut varier selon la complexité du projet et les fonctionnalités requises. Chaque phase (design, développement, tests) est soigneusement planifiée pour garantir un résultat optimal."
  },
  {
    question: "Comment mes photos seront-elles mises en valeur ?",
    answer: "Vos photos seront présentées avec une qualité optimale grâce à des galeries responsives, un chargement optimisé et des fonctionnalités de zoom. L'interface est conçue pour mettre l'accent sur vos images tout en maintenant des temps de chargement rapides."
  },
  {
    question: "Le site sera-t-il optimisé pour mobile ?",
    answer: "Absolument ! Tous les sites sont développés avec une approche 'mobile-first', garantissant une expérience optimale sur tous les appareils. Les galeries, la navigation et toutes les fonctionnalités sont parfaitement adaptées aux écrans mobiles."
  },
  {
    question: "Proposez-vous des services de maintenance ?",
    answer: "Oui, je propose plusieurs formules de maintenance pour garantir que votre site reste performant et sécurisé. Cela inclut les mises à jour techniques, les sauvegardes régulières et le support en cas de besoin."
  },
  {
    question: "Comment se déroule notre collaboration ?",
    answer: "La collaboration commence par une consultation approfondie pour comprendre vos besoins. Je vous accompagne ensuite à chaque étape avec une communication claire et régulière. Vous êtes impliqué dans les décisions importantes tout en bénéficiant de conseils experts."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Questions Fréquentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur la création de votre site web photographe
          </p>
        </MotionDiv>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 flex items-center justify-between"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <MotionPresence>
                {openIndex === index && (
                  <MotionContent
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </MotionContent>
                )}
              </MotionPresence>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
