import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Couvreur de Vendée à Nesmy | Couverture, Zinguerie, Nettoyage',
  description: 'Spécialiste en couverture, zinguerie, nettoyage de toiture et pose de fenêtres de toit à Nesmy et dans un rayon de 50km. Devis gratuit, intervention rapide. Plus de 15 ans d\'expérience.',
  keywords: [
    'couvreur vendée',
    'couvreur nesmy',
    'couverture toiture',
    'zinguerie',
    'nettoyage toiture',
    'fenêtres de toit',
    'réparation toiture',
    'devis gratuit',
    'couvreur professionnel',
    'toiture vendée'
  ],
  authors: [{ name: 'Couvreur de Vendée' }],
  creator: 'Couvreur de Vendée',
  publisher: 'Couvreur de Vendée',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://couvreurdevendee.fr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Couvreur de Vendée à Nesmy | Couverture, Zinguerie, Nettoyage',
    description: 'Spécialiste en couverture, zinguerie, nettoyage de toiture et pose de fenêtres de toit à Nesmy et dans un rayon de 50km. Devis gratuit, intervention rapide.',
    url: 'https://couvreurdevendee.fr',
    siteName: 'Couvreur de Vendée',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Couvreur de Vendée - Couverture, Zinguerie, Nettoyage',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Couvreur de Vendée à Nesmy | Couverture, Zinguerie, Nettoyage',
    description: 'Spécialiste en couverture, zinguerie, nettoyage de toiture et pose de fenêtres de toit à Nesmy et dans un rayon de 50km.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f97316" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Couvreur de Vendée',
              url: 'https://couvreurdevendee.fr',
              image: 'https://couvreurdevendee.fr/logo.png',
              telephone: '+33641302575',
              email: 'contact@couvreur-vendee.fr',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '26 rue Edouard-Monti',
                addressLocality: 'Nesmy',
                postalCode: '85310',
                addressCountry: 'FR'
              },
              sameAs: [
                'https://www.facebook.com/profile.php?id=100066644571040'
              ],
              areaServed: [
                'Nesmy', 'Vendée', 'Pays de la Loire'
              ],
              priceRange: '€€',
              openingHours: 'Mo-Fr 08:00-19:00',
              description:
                "Spécialiste en couverture, zinguerie, nettoyage de toiture et pose de fenêtres de toit. Intervention ~50km autour de Nesmy."
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
