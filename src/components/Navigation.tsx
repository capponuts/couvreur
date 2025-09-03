'use client'

import { motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Sparkles className="h-8 w-8 text-orange-400" />
            <span className="text-2xl font-bold text-white">Couvreur de Vendée</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <motion.a 
              href="#services"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full"></span>
            </motion.a>
            
            <motion.a 
              href="#realisations"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              Réalisations
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full"></span>
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ y: -2 }}
              className="text-gray-300 hover:text-white transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 transition-all group-hover:w-full"></span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        variants={menuVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col space-y-4">
            <motion.a 
              href="#services"
              whileHover={{ x: 10 }}
              className="text-gray-300 hover:text-white transition-colors text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </motion.a>
            
            <motion.a 
              href="#realisations"
              whileHover={{ x: 10 }}
              className="text-gray-300 hover:text-white transition-colors text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Réalisations
            </motion.a>
            
            <motion.a 
              href="#contact"
              whileHover={{ x: 10 }}
              className="text-gray-300 hover:text-white transition-colors text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </motion.a>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}
