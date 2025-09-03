# 🏠 Couvreur de Vendée - Site Web Professionnel

Site web moderne et responsive pour Couvreur de Vendée, spécialiste en couverture, zinguerie, nettoyage de toiture et pose de fenêtres de toit à Nesmy et dans un rayon de 50km.

## ✨ Fonctionnalités

### 🎯 **Navigation & UX**
- **Navigation fluide** avec scroll automatique vers les sections
- **Menu responsive** qui s'adapte au scroll (transparent → opaque)
- **Bouton "Retour en haut"** avec animation
- **Scroll fluide** entre les sections
- **Boutons flottants** (Appel, Facebook)

### 📱 **Design Responsive**
- **Mobile-first** design
- **Breakpoints optimisés** : sm, md, lg, xl
- **Navigation mobile** avec menu hamburger
- **Images et vidéos** adaptatives

### 🎨 **Animations & Interactions**
- **Framer Motion** pour des animations fluides
- **Hover effects** sur les éléments interactifs
- **Transitions** CSS et JavaScript
- **Animations au scroll** avec `whileInView`

### 📧 **Formulaire de Contact**
- **Intégration Resend** pour l'envoi d'emails (fallback succès si clé manquante)
- **Validation des champs** côté client et serveur
- **Gestion des états** (envoi, succès, erreur)
- **Sélection de service** avec dropdown

### 🔍 **SEO Optimisé**
- **Métadonnées complètes** (Open Graph, Twitter)
- **Sitemap dynamique** généré automatiquement
- **Robots.txt** configuré
- **JSON-LD**: LocalBusiness, ItemList (Services), Breadcrumb par page service
- **Images avec alt text**

## 🚀 Technologies

- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Email** : Resend
- **Analytics** : Vercel Analytics
- **Deployment** : Vercel

## 📦 Installation

1. **Cloner le projet**
```bash
git clone https://github.com/your-username/couvreur-vendee.git
cd couvreur-vendee
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration Resend** (optionnel)
```bash
# Créer un fichier .env.local
RESEND_API_KEY=your_resend_api_key_here
NEXT_PUBLIC_SITE_URL=https://couvreurdevendee.fr
```

4. **Lancer en développement**
```bash
npm run dev
```

## ⚙️ Configuration Resend

Pour activer l'envoi d'emails :

1. **Créer un compte** sur https://resend.com
2. **Obtenir une clé API** dans le dashboard
3. **Créer un fichier `.env.local`** :
```env
RESEND_API_KEY=re_your_api_key_here
```
4. **Configurer le domaine** dans Resend (optionnel)

## 🏗️ Structure du Projet

```
src/
├── app/
│   ├── api/contact/route.ts    # API Resend
│   ├── globals.css             # Styles globaux
│   ├── layout.tsx              # Layout principal
│   ├── page.tsx                # Page d'accueil
│   ├── robots.ts               # Robots.txt
│   └── sitemap.ts              # Sitemap
├── components/
│   ├── Avis.tsx                # Avis clients (slider)
│   ├── Contact.tsx             # Section contact
│   ├── Footer.tsx              # Pied de page
│   ├── Hero.tsx                # Section héro
│   ├── Navigation.tsx          # Navigation
│   ├── Realisations.tsx        # Slider + lightbox
│   ├── ScrollToTop.tsx         # Boutons flottants + retour haut
│   └── Services.tsx            # Section services
└── ...
```

## 🎨 Composants Principaux

### **Navigation**
- **Scroll-aware** : change d'apparence selon le scroll
- **Responsive** : menu hamburger sur mobile
- **Liens inter-pages** `/#section` fonctionnels
- **CTA** "Devis Gratuit"

### **Hero**
- **Vidéo de fond** avec overlay
- **Titre animé** avec gradient
- **Logo** encadré
- **Call-to-action** vers `/#contact` et `/#realisations`

### **Services**
- **3 services principaux** (pages dédiées + FAQ schema)
- **CTA "En savoir plus"** vers pages /services

### **Réalisations**
- **Slider** avec lightbox (clic pour agrandir)
- **Navigation** par points et clavier
- **Lazy loading**

### **Contact**
- **Formulaire complet** (fallback OK sans clé Resend)
- **Informations de contact** détaillées

## 🚀 Déploiement

### **Vercel (Recommandé)**
1. **Connecter le repo** GitHub à Vercel
2. **Configurer les variables d'environnement** :
   - `RESEND_API_KEY`
   - `NEXT_PUBLIC_SITE_URL` (ex: https://couvreurdevendee.fr)
3. **Déploiement automatique** à chaque push sur `main`

## 🔧 Scripts Disponibles

```bash
npm run dev          # Développement local
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
npm run type-check   # Vérification TypeScript
```

## 📈 Performance
- **Lazy images**, **split code**, **Core Web Vitals** suivis

## 🔍 SEO
### **Métadonnées**
- **Title** optimisé
- **Description** (50km autour de Nesmy)
- **Open Graph** (og-image)

## 📞 Support
- **Email** : couvreur.devendee@orange.fr
- **Téléphone** : 06 41 30 25 75 (Bryan) / 06 06 56 01 66 (Cédric)
- **Adresse** : 26 rue Edouard-Monti, 85310 Nesmy

---

**Couvreur de Vendée** - Plus de 15 ans d'expérience au service de votre satisfaction ! 🏠✨
