'use client';

import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-light mb-8 tracking-tight">Contact</h1>
          
          <div className="space-y-12">
            <div className="prose prose-lg">
              <p className="text-gray-600">
                Pour toute demande de collaboration ou de renseignements sur mes services de photographie architecturale, 
                n'hésitez pas à me contacter.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700">
                  Type de projet
                </label>
                <select
                  id="project"
                  name="project"
                  className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:ring-gray-500 focus:border-gray-500"
                >
                  <option>Architecture résidentielle</option>
                  <option>Architecture commerciale</option>
                  <option>Design d'intérieur</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="mt-1 block w-full border-gray-300 rounded-none shadow-sm focus:ring-gray-500 focus:border-gray-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  Envoyer
                </button>
              </div>
            </form>

            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">contact@marc-leveque.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Basé à</h3>
                  <p className="mt-1 text-gray-600">Paris, France</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
