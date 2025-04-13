'use client';

import { MotionDiv } from '../ui/MotionDiv';
import { 
  ChatBubbleLeftRightIcon, 
  PencilSquareIcon, 
  CodeBracketIcon, 
  RocketLaunchIcon 
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Discussion',
    description: 'Nous échangeons sur vos besoins et vos objectifs pour créer un site qui vous ressemble.',
    icon: ChatBubbleLeftRightIcon,
    ariaLabel: 'Première étape : Discussion et analyse des besoins',
  },
  {
    title: 'Design',
    description: 'Je conçois une maquette moderne et élégante qui met en valeur votre travail.',
    icon: PencilSquareIcon,
    ariaLabel: 'Deuxième étape : Conception du design',
  },
  {
    title: 'Développement',
    description: 'Je développe votre site avec les dernières technologies pour des performances optimales.',
    icon: CodeBracketIcon,
    ariaLabel: 'Troisième étape : Développement du site',
  },
  {
    title: 'Mise en ligne',
    description: 'Je déploie votre site et vous forme à son utilisation pour une totale autonomie.',
    icon: RocketLaunchIcon,
    ariaLabel: 'Quatrième étape : Déploiement et formation',
  },
];

export default function ProcessSection() {
  return (
    <section 
      id="process" 
      className="py-16 sm:py-24 bg-gray-50"
      aria-labelledby="process-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <h2 
            id="process-title"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            Mon processus de création
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Une approche structurée pour donner vie à votre projet
          </p>
        </MotionDiv>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12"
          role="list"
          aria-label="Étapes du processus de création"
        >
          {steps.map((step, index) => (
            <MotionDiv
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              role="listitem"
              aria-label={step.ariaLabel}
            >
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div 
                  className="w-16 h-16 mb-6 p-3 bg-black text-white rounded-lg"
                  aria-hidden="true"
                >
                  <step.icon className="w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              
              
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}
