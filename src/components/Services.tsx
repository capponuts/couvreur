'use client'

import { motion } from 'framer-motion'
import { Home, Droplets, Square } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
  const services = [
    {
      icon: <Home className="h-16 w-16 text-orange-500" />,
      title: "Couverture & Zinguerie",
      description: "Nous réalisons tous vos travaux de couverture et zinguerie pour assurer une toiture esthétique, durable et parfaitement étanche. Faites confiance à notre savoir-faire.",
      image: "/Couvreur-zingueur-a-Nesmy03.jpg"
    },
    {
      icon: <Droplets className="h-16 w-16 text-blue-500" />,
      title: "Nettoyage et fuites",
      description: "Prolongez la durée de vie de votre toiture grâce à nos services de nettoyage et de réparation de fuites. Nous intervenons rapidement pour garantir une toiture propre et sans défauts.",
      image: "/Nettoyage-de-toiture-a-Nemsy01.jpg"
    },
    {
      icon: <Square className="h-16 w-16 text-green-500" />,
      title: "Pose de fenêtres de toit",
      description: "Apportez lumière et charme à vos combles grâce à notre expertise en pose de fenêtres de toit. Nous vous garantissons une installation sécurisée et parfaitement isolée.",
      image: "/Pose-de-fenetre-de-toit-a-Nemsy-_3.jpg"
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spécialistes en couverture, zinguerie, nettoyage et pose de fenêtres de toit
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Notre savoir-faire
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Couvreurs professionnels à Nesmy, nous vous garantissons un travail propre et de qualité optimale.
                </p>
                <p>
                  Confiez-nous vos travaux de toitures, dès la pose de couverture jusqu'à la recherche de fuites, nous nous occupons de tout.
                </p>
                <p>
                  Nous mettons tout en œuvre pour obtenir votre entière satisfaction.
                </p>
                <p>
                  La qualité et le respect des délais sont nos maîtres mots.
                </p>
                <p>
                  Lors de nos interventions, nous veillons aux petits détails en termes de protection et de résistance aux intempéries.
                </p>
                <p>
                  Pour assurer un rendu irréprochable, nous utilisons des produits et des techniques efficaces.
                </p>
                <p>
                  Tous nos travaux sont conformes aux normes de sécurité et de protection de l'environnement.
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Contactez Nous
              </motion.button>
            </div>
            <div className="relative">
              <Image
                src="/bryan-crapet.png"
                alt="Notre savoir-faire"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
