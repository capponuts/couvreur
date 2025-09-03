'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold">Couvreur de Vendée</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Spécialisés en couverture, zinguerie, nettoyage de toiture, réparation de fuites 
              et pose de fenêtres de toit. Plus de 15 ans d'expérience au service de votre satisfaction.
            </p>
            <div className="flex space-x-4">
              <a href="tel:+33641302575" className="text-orange-400 hover:text-orange-300 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              <a href="mailto:contact@couvreur-vendee.fr" className="text-orange-400 hover:text-orange-300 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100066644571040"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors font-semibold"
                aria-label="Facebook"
                title="Facebook"
              >
                Fb
              </a>
              <a href="#contact" className="text-orange-400 hover:text-orange-300 transition-colors">
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Nos Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Couverture & Zinguerie</li>
              <li>Nettoyage de toiture</li>
              <li>Réparation de fuites</li>
              <li>Pose de fenêtres de toit</li>
              <li>Entretien préventif</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-orange-400">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>26 rue Edouard-Monti</p>
              <p>85310 Nesmy</p>
              <p className="mt-4">
                <span className="font-semibold">Bryan CRAPET</span><br />
                06 41 30 25 75
              </p>
              <p className="mt-2">
                <span className="font-semibold">Cédric GUERIN</span><br />
                06 06 56 01 66
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; 2024 Couvreur de Vendée. Tous droits réservés.</p>
          <p className="mt-2 text-sm">
            Zone d'intervention : 50 km autour de Nesmy, Vendée
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
