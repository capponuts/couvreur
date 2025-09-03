export default function Page() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels types de couverture proposez-vous ? ',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            "Ardoise, tuiles, zinc et solutions adaptées au bâti ancien ou contemporain, selon vos besoins et votre budget.",
        },
      },
      {
        '@type': 'Question',
        name: 'Intervenez-vous pour la zinguerie ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text:
            'Oui, nous réalisons la pose et la rénovation d’éléments zinc (rives, chéneaux, descentes, solins) pour une étanchéité durable.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des devis gratuits ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, le devis est gratuit et détaillé, avec un délai d’intervention rapide autour de Nesmy (≈50km).',
        },
      },
    ],
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://couvreurdevendee.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://couvreurdevendee.fr/#services' },
      { '@type': 'ListItem', position: 3, name: 'Couverture & Zinguerie', item: 'https://couvreurdevendee.fr/services/couverture-zinguerie' },
    ],
  }

  return (
    <main className="container mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-6">Couverture & Zinguerie</h1>
      <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
        Nous réalisons la pose, la rénovation et l’entretien de toitures: ardoise, tuiles, zinc. Notre
        expertise couvre la zinguerie (chéneaux, solins, descentes), l’étanchéité et la ventilation, avec un soin
        particulier apporté aux détails et à la durabilité. Nous intervenons autour de Nesmy (≈50km) avec des délais
        tenus et des devis clairs.
      </p>

      <section className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Nos interventions</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Pose et réfection de toiture (ardoise, tuiles, zinc)</li>
            <li>Travaux de zinguerie: rives, chéneaux, descentes, solins</li>
            <li>Étanchéité, ventilation, reprise de points singuliers</li>
            <li>Réparations ciblées et entretien préventif</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Pourquoi nous choisir ?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>15+ ans d’expérience et finitions soignées</li>
            <li>Conseils transparents, devis gratuit et détaillé</li>
            <li>Respect des délais et du bâti existant</li>
            <li>Suivi client et garanties</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-4 text-gray-700">
          <details className="rounded-lg border p-4"><summary className="font-medium">Quels types de couverture proposez-vous ?</summary><p className="mt-2">Ardoise, tuiles, zinc et solutions adaptées selon vos besoins.</p></details>
          <details className="rounded-lg border p-4"><summary className="font-medium">Faites-vous la zinguerie ?</summary><p className="mt-2">Oui, pose et rénovation d’éléments zinc pour une étanchéité durable.</p></details>
          <details className="rounded-lg border p-4"><summary className="font-medium">Le devis est-il gratuit ?</summary><p className="mt-2">Oui, devis gratuit avec délai d’intervention rapide autour de Nesmy.</p></details>
        </div>
      </section>
    </main>
  )
}