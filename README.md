# 🏠 Couvreur de Vendée - Site Web Professionnel

Un site web moderne et élégant pour l'entreprise Couvreur de Vendée, construit avec Next.js, Tailwind CSS, et Framer Motion. Ce site reprend tout le contenu de l'ancien site web tout en offrant une expérience utilisateur moderne et responsive.

## ✨ Fonctionnalités

- 🎨 Design moderne avec animations fluides
- 📱 Interface responsive pour tous les appareils
- ⚡ Performance optimisée avec Next.js 15
- 🎭 Animations avec Framer Motion
- 🎨 Icônes avec Lucide React
- 🎨 Styling avec Tailwind CSS
- 🔍 SEO optimisé
- 🚀 Prêt pour le déploiement sur Vercel
- 📸 Galerie d'images des réalisations
- 📝 Formulaire de contact fonctionnel

## 🛠️ Technologies Utilisées

- **Framework**: Next.js 15 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icônes**: Lucide React
- **Linting**: ESLint
- **Build Tool**: Next.js Build System

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

1. **Cloner le repository**
   ```bash
   git clone <votre-repo>
   cd couvreur-vendee
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir votre navigateur**
   ```
   http://localhost:3000
   ```

## 📁 Structure du Projet

```
src/
├── app/                 # App Router (Next.js 15)
│   ├── globals.css     # Styles globaux
│   ├── layout.tsx      # Layout principal
│   └── page.tsx        # Page d'accueil
├── components/          # Composants réutilisables
│   ├── Navigation.tsx  # Navigation principale
│   ├── Hero.tsx        # Section héro
│   ├── Services.tsx    # Section services
│   ├── Realisations.tsx # Section réalisations
│   ├── Contact.tsx     # Section contact
│   └── Footer.tsx      # Pied de page
└── lib/                # Utilitaires et configurations
```

## 🎨 Composants Principaux

### Navigation
- Navigation fixe avec effet de transparence
- Menu mobile responsive
- Animations au survol et au clic
- Liens vers toutes les sections

### Hero
- Section d'accueil avec logo de l'entreprise
- Titre principal avec effet de typewriter
- Boutons d'appel à l'action
- Statistiques de l'entreprise
- Indicateur de défilement

### Services
- Présentation des 3 services principaux
- Images des réalisations
- Section détaillée sur le savoir-faire
- Bouton de contact

### Réalisations
- Galerie d'images des travaux
- Section des engagements de l'entreprise
- Présentation des valeurs

### Contact
- Formulaire de demande de devis
- Informations de contact complètes
- Zone d'intervention détaillée
- Coordonnées des artisans

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Connecter votre repository GitHub à Vercel**
2. **Configurer les variables d'environnement si nécessaire**
3. **Déployer automatiquement**

### Configuration GitHub Actions

Le projet inclut un workflow GitHub Actions pour le déploiement automatique sur Vercel.

### Variables d'environnement requises

```bash
NEXT_PUBLIC_SITE_URL=https://couvreur-vendee.fr
```

### Configuration Vercel

Le projet inclut un fichier `vercel.json` avec :
- Configuration de build optimisée
- Headers de sécurité
- Configuration des fonctions
- Région de déploiement (CDG1 - Paris)

## 📱 Responsive Design

Le site est entièrement responsive avec :
- Mobile First approach
- Breakpoints : sm (640px), md (768px), lg (1024px), xl (1280px)
- Navigation mobile avec menu hamburger
- Grilles adaptatives
- Images responsives

## 🎭 Animations

### Framer Motion
- Animations d'entrée avec `initial` et `animate`
- Animations au survol avec `whileHover`
- Animations au clic avec `whileTap`
- Transitions fluides et personnalisées

### CSS Animations
- Animations de flottement
- Effets de pulsation
- Transitions de couleur et de transformation

## 🎨 Personnalisation

### Couleurs
Les couleurs sont basées sur l'ancien site :
- `primary`: Palette de couleurs orange (couvreur)
- `secondary`: Palette de couleurs bleues
- `accent`: Palette de couleurs jaunes

### Typographie
- Police principale : Inter
- Police d'affichage : Poppins
- Tailles de texte responsives

## 🔧 Scripts Disponibles

```bash
npm run dev          # Démarre le serveur de développement
npm run build        # Construit l'application pour la production
npm run start        # Démarre le serveur de production
npm run lint         # Lance ESLint
npm run type-check   # Vérifie les types TypeScript
```

## 📈 Performance

- **Lazy Loading** des composants
- **Optimisation des images** avec Next.js Image
- **Code Splitting** automatique
- **Bundle Analysis** disponible

## 🔍 SEO

- Métadonnées optimisées basées sur l'ancien site
- Structure HTML sémantique
- Open Graph tags
- Schema.org markup
- Mots-clés ciblés pour le référencement local

## 📸 Images et Contenu

Toutes les images et le contenu textuel proviennent de l'ancien site web :
- Logo de l'entreprise
- Photos des réalisations
- Descriptions des services
- Informations de contact
- Zone d'intervention

## 🚀 Déploiement Rapide

### Option 1: Vercel (Recommandé)
1. Fork ce repository
2. Connectez-le à Vercel
3. Déployez en un clic

### Option 2: GitHub Actions
1. Configurez les secrets GitHub
2. Push sur la branche main
3. Déploiement automatique

### Option 3: Manuel
1. `npm run build`
2. Déployez le dossier `.next`

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Créer une issue sur GitHub
- Contacter l'équipe de développement

---

**Développé avec ❤️ pour Couvreur de Vendée**

*Site web moderne reprenant tout le contenu de l'ancien site avec une interface utilisateur améliorée et des animations fluides.*
