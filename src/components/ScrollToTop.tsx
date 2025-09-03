'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = '0641302575'

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {/* Floating Call Button */}
      <a
        href={`tel:+33${phoneNumber}`}
        className="fixed z-40 right-4 bottom-4 md:bottom-20 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-colors"
        aria-label="Appeler"
        title="Appeler le 06 41 30 25 75"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M2 3.5A1.5 1.5 0 013.5 2h3A1.5 1.5 0 018 3.5v2A1.5 1.5 0 016.5 7h-.764a1 1 0 00-.96 1.274 13.01 13.01 0 007.91 7.91 1 1 0 001.274-.96V14.5A1.5 1.5 0 0115 13h2A1.5 1.5 0 0118.5 14.5v3A1.5 1.5 0 0117 19h-1C8.82 19 3 13.18 3 6V5a1.5 1.5 0 01-1-1.5z" />
        </svg>
      </a>

      {/* Floating Facebook Button */}
      <a
        href="https://www.facebook.com/profile.php?id=100066644571040"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-40 right-4 bottom-20 md:bottom-36 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg w-14 h-14 flex items-center justify-center transition-colors"
        aria-label="Facebook"
        title="Facebook"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M22 12a10 10 0 10-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.21.19 2.21.19v2.43h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.89h-2.3v6.98A10 10 0 0022 12z" />
        </svg>
      </a>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Retour en haut de page"
          >
            <ArrowUp className="h-6 w-6 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
