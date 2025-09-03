'use client'

import { motion } from 'framer-motion'
import { Star, Award, Clock, Shield } from 'lucide-react'

export default function Realisations() {
  // Media gallery removed per request

  const engagements = [
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      title: "Respect des délais",
      description: "Nous respectons les délais convenus pour tous nos projets"
    },
    {
      icon: <Star className="h-8 w-8 text-yellow-500" />,
      title: "Travail rapide",
      description: "Réalisation de nos travaux dans les meilleurs délais"
    },
    {
      icon: <Award className="h-8 w-8 text-green-500" />,
      title: "Matériaux adaptés",
      description: "Utilisation de matériaux de qualité adaptés à vos besoins"
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-500" />,
      title: "Solidité garantie",
      description: "Assurance de la solidité et de l'esthétisme de votre toiture"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos plus belles réalisations en couverture et zinguerie
          </p>
        </motion.div>

        {/* Gallery removed */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="relative aspect-square rounded-lg shadow-lg bg-gradient-to-br from-slate-100 to-slate-200" />
          ))}
        </div>

        {/* Engagements Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Nos Engagements
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Professionnels de travaux de toitures en Vendée, nous nous engageons à :
            </p>
            
            <div className="space-y-6">
              {engagements.map((engagement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 mt-1">
                    {engagement.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {engagement.title}
                    </h4>
                    <p className="text-gray-600">
                      {engagement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-2xl shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 h-72"
          />
        </div>
      </div>
    </section>
  )
}
