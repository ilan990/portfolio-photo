'use client';

import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { MotionDiv } from '../ui/MotionDiv';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData(initialFormData);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container">
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Contactez-moi</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discutons de votre projet et voyons comment je peux vous aider à créer
            votre présence en ligne idéale
          </p>
        </MotionDiv>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-6">Parlons de votre projet</h3>
              <p className="text-gray-600 mb-8">
                Je suis là pour répondre à vos questions et vous accompagner dans la création
                de votre site web. N&apos;hésitez pas à me contacter par le moyen qui vous
                convient le mieux.
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center text-gray-600 hover:text-black transition-colors"
                >
                  <EnvelopeIcon className="w-6 h-6 mr-3" />
                  contact@example.com
                </a>
                <a
                  href="tel:+33600000000"
                  className="flex items-center text-gray-600 hover:text-black transition-colors"
                >
                  <PhoneIcon className="w-6 h-6 mr-3" />
                  +33 6 00 00 00 00
                </a>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-shadow resize-none"
                  />
                </div>
                <MotionDiv
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-colors ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-black hover:bg-gray-900'
                    }`}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
                  </button>
                </MotionDiv>
                {submitStatus === 'success' && (
                  <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-600 text-center"
                  >
                    Message envoyé avec succès !
                  </MotionDiv>
                )}
                {submitStatus === 'error' && (
                  <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-600 text-center"
                  >
                    Une erreur est survenue. Veuillez réessayer.
                  </MotionDiv>
                )}
              </form>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
}
