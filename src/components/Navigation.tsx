'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Offset pour la navbar
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsOpen(false) // Ferme le menu mobile
  }

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#realisations', label: 'Réalisations' },
    { href: '#avis', label: 'Avis' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Couvreur de Vendée
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href.slice(1))}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                    : 'text-white hover:text-orange-400 hover:bg-white/10'
                }`}
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Devis Gratuit
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.href}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.href.slice(1))}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300"
                  >
                    {item.label}
                  </motion.button>
                ))}
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  Devis Gratuit
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
