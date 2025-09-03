'use client'

import { motion } from 'framer-motion'
import { Star, Award, Clock, Shield } from 'lucide-react'
import Image from 'next/image'

export default function Realisations() {
  const realisations = [
    {
      src: "/slide1.jpg",
      alt: "Réalisation couverture 1"
    },
    {
      src: "/Couvreur-de-Vendee-a-Nesmy05.jpg",
      alt: "Réalisation couverture 2"
    },
    {
      src: "/Couvreur-de-Vendee-a-Nesmy07.jpg",
      alt: "Réalisation couverture 3"
    },
    {
      src: "/Couvreur-de-Vendee-a-Nesmy10.jpg",
      alt: "Réalisation couverture 4"
    },
    {
      src: "/Les-realisations-de-Couvreur-de-Vendee-a-Nesmy09.jpg",
      alt: "Réalisation couverture 5"
    },
    {
      src: "/slide_2.jpg",
      alt: "Réalisation couverture 6"
    }
  ]

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

        {/* Gallery Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20"
        >
          {realisations.map((realisation, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, z: 10 }}
              className="relative group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={realisation.src}
                  alt={realisation.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>

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
            className="relative"
          >
            <Image
              src="/CASA.jpg"
              alt="Nos engagements"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
