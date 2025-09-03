'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, Star, Phone } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  }

  const typewriterTexts = [
    "de couverture.",
    "de zinguerie.",
    "de nettoyage",
    "en Vendée"
  ]

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video-cover.mp4" type="video/mp4" />
      </video>
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />
      
      {/* Animated Background Shapes */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl z-0"
      />
      
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl z-0"
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <img
            src="/logo.png"
            alt="Couvreur de Vendée"
            width={200}
            height={100}
            className="mx-auto"
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-8"
        >
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="text-white font-medium">Plus de 15 ans d'expérience</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 md:mb-6 leading-tight px-2"
        >
          Couvreur de{' '}
          <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Vendée
          </span>
          {' '}à Nesmy
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.div
          variants={itemVariants}
          className="mb-6 md:mb-8"
        >
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white px-2">
            Des travaux{' '}
            <span className="text-orange-400 font-semibold">
              {typewriterTexts[0]}
            </span>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
        >
          Plus de 15 ans d'expérience en couverture, zinguerie et nettoyage de toiture. 
          Devis gratuit et intervention rapide dans un rayon de 70km autour de Nesmy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:shadow-2xl transition-all duration-300 shadow-lg"
          >
            <span>DEVIS GRATUIT</span>
            <ArrowRight className="h-5 w-5" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 hover:bg-white/20 transition-all duration-300"
          >
            <Play className="h-5 w-5" />
            <span>Voir nos réalisations</span>
          </motion.button>
        </motion.div>

        {/* Phone Call Button */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <motion.a
            href="tel:+33641302575"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg"
          >
            <Phone className="h-6 w-6" />
            <span>06 41 30 25 75</span>
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
            <div className="text-gray-400">Projets réalisés</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
            <div className="text-gray-400">Années d'expérience</div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Clients satisfaits</div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
