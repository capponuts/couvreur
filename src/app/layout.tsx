import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Couvreur en Vendée à Nesmy - Toiture, Zinguerie, Nettoyage et Pose de Fenêtres de Toit',
  description: 'Besoin d\'un couvreur en Vendée ? Nous sommes spécialisés en couverture, zinguerie, nettoyage de toiture, réparation de fuites et pose de fenêtres de toit. Expertise, rapidité et qualité pour tous vos travaux ! Assurez la robustesse et la solidité de votre toiture avec Couvreur de Vendée.',
  keywords: 'couvreur, vendée, nesmy, toiture, zinguerie, nettoyage, fenêtres de toit, réparation fuites',
  authors: [{ name: 'Couvreur de Vendée' }],
  creator: 'Couvreur de Vendée',
  publisher: 'Couvreur de Vendée',
  robots: 'index, follow',
  openGraph: {
    title: 'Couvreur en Vendée à Nesmy - Toiture, Zinguerie, Nettoyage et Pose de Fenêtres de Toit',
    description: 'Spécialisés en couverture, zinguerie, nettoyage de toiture, réparation de fuites et pose de fenêtres de toit. Plus de 15 ans d\'expérience au service de votre satisfaction.',
    url: 'https://couvreur-vendee.fr',
    siteName: 'Couvreur de Vendée',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Couvreur en Vendée à Nesmy',
    description: 'Spécialisés en couverture, zinguerie, nettoyage de toiture et pose de fenêtres de toit',
  },
  alternates: {
    canonical: 'https://couvreur-vendee.fr',
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
