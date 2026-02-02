'use client'

import { motion } from 'framer-motion'
import { Star, Award, Clock, Shield } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Realisations() {
  const realisations = [
    { src: '/real1.jpg', alt: 'Réalisation de toiture' },
    { src: '/real2.jpg', alt: 'Nettoyage de toiture' },
    { src: '/real3.jpg', alt: 'Pose de fenêtre de toit' },
    { src: '/real4.jpg', alt: 'Travaux de zinguerie' },
    { src: '/real5.jpg', alt: 'Rénovation de couverture' },
    { src: '/real6.jpg', alt: 'Entretien de toiture' },
    { src: '/real7.jpg', alt: 'Réalisation en Vendée' },
    { src: '/real8.jpg', alt: 'Toiture terminée' },
    { src: '/real9.jpg', alt: 'Chantier de couverture' },
    { src: '/real10.jpg', alt: 'Zinguerie sur mesure' },
    { src: '/real11.jpg', alt: 'Rénovation ardoise' },
    { src: '/real12.jpg', alt: 'Protection de toiture' },
    { src: '/real13.jpg', alt: 'Pose de tuiles' },
    { src: '/real14.jpg', alt: 'Étanchéité toiture' },
    { src: '/real15.jpg', alt: 'Réalisation Couvreur de Vendée' },
    { src: '/real16.jpg', alt: 'Toiture neuve' },
    { src: '/real17.jpg', alt: 'Travaux de rénovation' },
    { src: '/real18.jpg', alt: 'Réparation de fuite' },
    { src: '/real19.jpg', alt: 'Couverture zinc' },
    { src: '/real20.jpg', alt: 'Nettoyage professionnel' },
    { src: '/real21.jpg', alt: 'Finition de toiture' },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const goPrev = () => setCurrentIndex((i) => (i === 0 ? realisations.length - 1 : i - 1))
  const goNext = () => setCurrentIndex((i) => (i === realisations.length - 1 ? 0 : i + 1))

  useEffect(() => {
    if (!isLightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false)
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [isLightboxOpen])

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
    <section id="realisations" className="py-20 bg-white">
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
        >
          {realisations.map((realisation, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-slate-50 aspect-square"
              onClick={() => {
                setCurrentIndex(index)
                setIsLightboxOpen(true)
              }}
            >
              <img
                src={realisation.src}
                alt={realisation.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold shadow-lg">
                    Voir le projet
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={realisations[currentIndex].src}
                alt={realisations[currentIndex].alt}
                loading="eager"
                className="w-full max-h-[80vh] object-contain"
              />
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-2 right-2 bg-white/90 text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow"
                aria-label="Fermer"
              >
                ✕
              </button>
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow"
                aria-label="Précédent"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 text-gray-900 rounded-full w-10 h-10 flex items-center justify-center shadow"
                aria-label="Suivant"
              >
                ›
              </button>
            </div>
          </div>
        )}

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
            <img
              src="/CASA.jpg"
              alt="Nos engagements"
              width={600}
              height={400}
              loading="lazy"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
