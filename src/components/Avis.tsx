"use client"

import { motion } from "framer-motion"

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
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre priorité. Découvrez quelques retours d'expérience.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reviews.map((r, idx) => (
            <motion.blockquote
              key={`${r.name}-${idx}`}
              variants={item}
              className="relative rounded-2xl bg-white border border-slate-200/70 shadow-sm p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{r.name}</p>
                  {r.meta && <p className="text-xs text-gray-500 mt-0.5">{r.meta}</p>}
                </div>
                <span className="text-orange-500 text-xl" aria-hidden>
                  “
                </span>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">{r.content}</p>
            </motion.blockquote>
          ))}
        </motion.div>
      </div>
    </section>
  )
}