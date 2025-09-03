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
        name: 'Installez-vous des fenêtres de toit ? ',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, pose de fenêtres de toit (type Velux), création d’ouvertures, habillages et étanchéité.',
        },
      },
      {
        '@type': 'Question',
        name: 'Pouvez-vous améliorer la luminosité ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nous proposons des solutions adaptées pour apporter lumière et ventilation aux combles.',
        },
      },
      {
        '@type': 'Question',
        name: 'Gérez-vous l’isolation autour des fenêtres ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui, nous veillons à l’étanchéité à l’air et à l’eau, ainsi qu’à l’isolation périphérique.',
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
      { '@type': 'ListItem', position: 3, name: 'Fenêtres de toit', item: 'https://couvreurdevendee.fr/services/fenetres-de-toit' },
    ],
  }

  return (
    <main className="min-h-screen">
      <Navigation />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="relative h-[44vh] md:h-[54vh]">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/real6.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/40 via-transparent to-blue-500/40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow">Pose de fenêtres de toit</h1>
            <p className="mt-3 text-white/95 max-w-2xl mx-auto drop-shadow">Création d’ouverture, pose, habillage et étanchéité dans les règles de l’art.</p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
          Apportez lumière, confort et ventilation à vos combles avec l’installation de fenêtres de toit. Nous assurons la création d’ouverture, la pose, l’habillage et l’étanchéité, dans le respect des règles de l’art.
        </p>

      <section className="mt-10 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Nos prestations</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Création d’ouverture et pose de fenêtres de toit</li>
            <li>Habillage extérieur, raccordements et étanchéité</li>
            <li>Conseils luminosité et ventilation</li>
            <li>Réglages et finitions</li>
          </ul>
        </div>
        <div className="space-y-4">
          <img src="/real3.jpg" alt="Fenêtre de toit" className="rounded-2xl shadow object-cover w-full h-64" loading="lazy" />
        </div>
      </section>

      <section className="mt-12 grid md:grid-cols-3 gap-6">
        {["Lumière", "Sécurité", "Étanchéité"].map((t, i) => (
          <div key={i} className="rounded-2xl bg-white border border-slate-200 shadow p-6">
            <h3 className="font-semibold text-gray-900 mb-2">{t}</h3>
            <p className="text-gray-600">{t === 'Lumière' ? 'Apport de lumière naturelle et ventilation maîtrisée.' : t === 'Sécurité' ? 'Installation réalisée dans les règles de l’art.' : 'Raccords et habillages pour une étanchéité durable.'}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
        <div className="space-y-4 text-gray-700">
          <details className="rounded-lg border p-4"><summary className="font-medium">Proposez-vous des Velux ?</summary><p className="mt-2">Oui, nous posons des fenêtres de toit adaptées à votre configuration.</p></details>
          <details className="rounded-lg border p-4"><summary className="font-medium">Gérez-vous l’étanchéité ?</summary><p className="mt-2">Oui, raccords et habillages garantissent une étanchéité durable.</p></details>
          <details className="rounded-lg border p-4"><summary className="font-medium">Faites-vous aussi la finition intérieure ?</summary><p className="mt-2">Nous pouvons conseiller et intervenir selon le besoin.</p></details>
        </div>
      </section>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}