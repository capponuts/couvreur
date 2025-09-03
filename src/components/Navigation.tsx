'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home as HomeIcon } from 'lucide-react'
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

  const getHref = (sectionId: string) => `/#${sectionId.replace('#', '')}`

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
            onClick={() => { window.location.href = getHref('hero') }}
          >
            <div className="flex items-center space-x-2">
              <div className={`rounded-lg p-1 ${scrolled ? 'bg-amber-900/20 border border-amber-800/30' : 'bg-amber-900/20 border border-amber-300/30'}`}>
                <img src="/logo-couvreur-de-vendee-carre.png" alt="Logo" width={28} height={28} className="rounded-md bg-white" />
              </div>
              <span className={`text-xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                Couvreur de Vendée
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/"
              className={`p-2 rounded-lg ${scrolled ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50' : 'text-white hover:text-orange-400 hover:bg-white/10'}`}
              aria-label="Accueil"
              title="Accueil"
            >
              <HomeIcon className="h-5 w-5" />
            </motion.a>
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={getHref(item.href.slice(1))}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                    : 'text-white hover:text-orange-400 hover:bg-white/10'
                }`}
              >
                {item.label}
              </motion.a>
            ))}
            
            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => { window.location.href = getHref('contact') }}
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
                <div className="flex items-center space-x-3 px-1">
                  <a href="/" onClick={() => setIsOpen(false)} className="p-2 rounded-lg text-gray-700 hover:text-orange-500 hover:bg-orange-50" aria-label="Accueil"><HomeIcon className="h-5 w-5" /></a>
                </div>
                {navItems.map((item) => (
                  <motion.a
                    key={item.href}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                    href={getHref(item.href.slice(1))}
                    onClick={() => setIsOpen(false)}
                    className="block w-full px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg font-medium transition-all duration-300"
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={getHref('contact')}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  Devis Gratuit
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
