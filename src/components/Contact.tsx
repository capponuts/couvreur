'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici vous pouvez ajouter la logique d'envoi du formulaire
    console.log('Formulaire soumis:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nous Contacter
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Si vous êtes tenté, le mieux c'est de nous contacter !
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Nos Coordonnées
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-orange-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Adresse</h4>
                    <p className="text-gray-300">26 rue Edouard-Monti, 85310 Nesmy</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-orange-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Téléphone</h4>
                    <div className="space-y-2">
                      <p className="text-gray-300">
                        <span className="font-semibold">CRAPET Bryan</span> : 06 41 30 25 75
                      </p>
                      <p className="text-gray-300">
                        <span className="font-semibold">GUERIN Cédric</span> : 06 06 56 01 66
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-orange-400 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-300">contact@couvreur-vendee.fr</p>
                  </div>
                </div>
              </div>

              {/* Zone d'intervention */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h4 className="text-white font-semibold mb-4">Zone d'intervention</h4>
                <p className="text-gray-300 mb-4">
                  Vous avez un projet de rénovation de couverture ou de pose de fenêtre de toit ? 
                  Sollicitez Couvreur de Vendée.
                </p>
                <p className="text-gray-300 mb-4">
                  Nous sommes disponibles pour répondre à vos demandes dans un rayon de 70 km autour de Nesmy, 
                  particulièrement à :
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <p>Aizenay</p>
                    <p>Brem-sur-Mer</p>
                    <p>Bretignolles-sur-Mer</p>
                    <p>Challans</p>
                    <p>Fontenay-le-Comte</p>
                    <p>Jard-sur-Mer</p>
                    <p>La Roche-sur-Yon</p>
                    <p>La Tranche-sur-Mer</p>
                    <p>Les Herbiers</p>
                  </div>
                  <div>
                    <p>Les Sables-d'Olonne</p>
                    <p>Luçon</p>
                    <p>Montaigu-Vendée</p>
                    <p>Notre-Dame-de-Monts</p>
                    <p>Saint-Gilles-Croix-de-Vie</p>
                    <p>Saint-Hilaire-de-Riez</p>
                    <p>Saint-Jean-de-Monts</p>
                    <p>Talmont-Saint-Hilaire</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Demande de devis
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nom et prénom"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Votre email"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Téléphone"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    placeholder="Date souhaitée"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    rows={4}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  <Send className="h-5 w-5" />
                  <span>Envoyer</span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
