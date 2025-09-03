"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Review {
  name: string
  content: string
  meta?: string
}

const reviews: Review[] = [
  {
    name: "Patricia Robin",
    content:
      "Rénovation d'une toiture en ardoise de 90 ans ! Bryan et Cédric sont deux professionnels compétents, serviables et respectueux. Respect des délais, bon rapport qualité/prix. Fiers de leur métier et du travail accompli. Je recommande.",
    meta: "Visité en avril",
  },
  {
    name: "Emilie Bébin",
    content:
      "Entreprise très sérieuse avec un savoir-faire incontestable. Devis diligent, explications claires tout au long du chantier. Travail rigoureux et soigné, pleine confiance.",
    meta: "Visité en mai",
  },
  {
    name: "julien laurent",
    content:
      "Super équipe, professionnelle et à l'écoute. Toiture refaite dans les temps, tarifs raisonnables, excellents conseils, travail impeccable. On recommande vivement !",
    meta: "Visité en septembre 2024",
  },
  {
    name: "Eleonora Milano",
    content:
      "Réfection d'une toiture en ardoise avec contraintes de rénovation : chantier bien exécuté, dans les délais. Compétents, professionnels, gentils et attentionnés. Je recommande.",
    meta: "Visité en juillet 2023",
  },
  {
    name: "kundalin07",
    content:
      "Qualité professionnelle. Aide sur des dégâts de tuiles puis remplacement de 145 m² en 2 jours aux normes DTU. Précis sur les dates, prix corrects.",
    meta: "Visité en juillet 2022",
  },
  {
    name: "Moa JohnTathan",
    content:
      "Très bonne réactivité, devis et travaux rapides. Excellent rapport qualité-prix. Travail impeccable, excellents conseils, ne pousse pas à la consommation.",
    meta: "Visité en octobre 2021",
  },
  {
    name: "Christelle Chariaud",
    content:
      "Très réactifs, travail satisfaisant. Nous leur avons demandé un devis pour le toit de notre grange. Professionnels et agréables.",
    meta: "Visité en mai 2022",
  },
  {
    name: "Stan Kirsch",
    content:
      "Équipe efficace et sympathique pour un nettoyage toiture très bien réalisé. Je recommande fortement.",
    meta: "Visité en décembre 2021",
  },
  {
    name: "Anne-Laure Guibert",
    content:
      "Entreprise sérieuse, ouvriers professionnels et agréables. Nous recommandons.",
    meta: "Visité en avril 2023",
  },
  {
    name: "catherine garcia",
    content:
      "Très bon travail, délais respectés, personnes compétentes et sympathiques. Je recommande.",
    meta: "Visité en avril 2021",
  },
  {
    name: "antonin vrignaud",
    content: "Je recommande largement !",
    meta: "Visité en avril 2021",
  },
]

export default function Avis() {
  const average = 4.9
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 4000)
    return () => clearInterval(id)
  }, [])
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section id="avis" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">Avis Clients</h2>
          <div className="text-gray-700 flex items-center justify-center gap-3">
            <span className="text-yellow-500 text-xl">★★★★★</span>
            <span className="font-semibold">{average.toFixed(1)}/5</span>
            <span className="text-sm text-gray-500">({reviews.length} avis)</span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${index * 100}%)` }}>
              {reviews.map((r, idx) => (
                <div key={`${r.name}-${idx}`} className="min-w-full px-2">
                  <blockquote className="rounded-2xl bg-white border border-slate-200/70 shadow p-6">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{r.name}</p>
                        {r.meta && <p className="text-xs text-gray-500 mt-0.5">{r.meta}</p>}
                      </div>
                      <span className="text-yellow-500" aria-hidden>★★★★★</span>
                    </div>
                    <p className="mt-4 text-gray-700 leading-relaxed">{r.content}</p>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Aller à l'avis ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${index === i ? 'w-6 bg-orange-500' : 'w-2.5 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}