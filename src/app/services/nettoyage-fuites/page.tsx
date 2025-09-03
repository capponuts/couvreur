import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

export default function Page() {
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quels nettoyages réalisez-vous ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Démoussage, nettoyage douce pression, traitements adaptés au matériau, évacuation des mousses et résidus.',
        },
      },
      {
        '@type': 'Question',
        name: 'Intervenez-vous pour les fuites ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, diagnostic rapide, réparations ciblées, reprise d’étanchéité et des points singuliers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Proposez-vous des contrats d’entretien ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, selon la typologie du toit et l’environnement, pour prévenir les désordres.',
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
      { '@type': 'ListItem', position: 3, name: 'Nettoyage et fuites', item: 'https://couvreurdevendee.fr/services/nettoyage-fuites' },
    ],
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="relative h-[40vh] md:h-[50vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300" style={{ backgroundImage: "url('/service-nettoyage.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Nettoyage & Réparation de fuites</h1>
            <p className="mt-3 text-white/90 max-w-2xl mx-auto">Démoussage, traitements adaptés et interventions rapides en cas de fuite.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
          Nous prolongeons la durée de vie de votre toiture grâce à des nettoyages adaptés (démoussage, traitements) et des interventions rapides en cas de fuite. Diagnostic précis, réparations ciblées et conseils de prévention.
        </p>

      <section className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Nos prestations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Démoussage et nettoyage douce pression</li>
            <li>Traitements adaptés (anti-mousse, hydrofuge)</li>
            <li>Réparations de fuites et étanchéité</li>
            <li>Entretien préventif</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Vos bénéfices</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Prévention des dégradations et infiltrations</li>
            <li>Toiture plus durable et esthétique</li>
            <li>Intervention rapide autour de Nesmy (≈50km)</li>
            <li>Devis gratuit et conseils personnalisés</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-4 text-gray-700">
          <details className="rounded-lg border p-4"><summary className="font-medium">Quel type de nettoyage effectuez-vous ?</summary><p className="mt-2">Démoussage, douce pression et traitements adaptés.</p></details>
          <details className="rounded-lg border p-4"><summary className="font-medium">Pouvez-vous intervenir en urgence pour une fuite ?</summary><p className="mt-2">Oui, diagnostic rapide et réparation ciblée.</p></details>
          <details className="rounded-lg border p-4"><summary className="font-medium">Proposez-vous un entretien régulier ?</summary><p className="mt-2">Oui, nous adaptons la fréquence à votre toiture.</p></details>
        </div>
      </section>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}