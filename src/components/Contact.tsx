'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    company: '', // honeypot
    formStart: '' // timestamp
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  useEffect(() => {
    setFormData(prev => ({ ...prev, formStart: String(Date.now()) }))
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setStatusMessage('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
        setFormData({ name: '', email: '', phone: '', service: '', message: '', company: '', formStart: String(Date.now()) })
      } else {
        setSubmitStatus('error')
        setStatusMessage(result.error || 'Une erreur est survenue. Veuillez réessayer.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setStatusMessage('Erreur de connexion. Veuillez vérifier votre connexion internet.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const services = [
    'Couverture & Zinguerie',
    'Nettoyage et fuites',
    'Pose de fenêtres de toit',
    'Autre'
  ]

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
                    <p className="text-gray-300">couvreur.devendee@orange.fr</p>
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
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  <p className="text-green-300">{statusMessage}</p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-400" />
                  <p className="text-red-300">{statusMessage}</p>
                </motion.div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot (anti-spam) */}
                <div aria-hidden="true" className="absolute left-[-10000px] top-auto w-0 h-0 overflow-hidden">
                  <label htmlFor="company">Entreprise</label>
                  <input
                    id="company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                  />
                </div>
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
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300"
                    required
                  >
                    <option value="">Sélectionnez un service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="text-gray-900">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Votre message"
                    rows={5}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-300 resize-none"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Envoyer le message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
