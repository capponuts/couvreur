# 🏠 Couvreur de Vendée - Site Web Professionnel

Site web moderne et responsive pour Couvreur de Vendée, spécialiste en couverture, zinguerie, nettoyage de toiture et pose de fenêtres de toit à Nesmy et dans un rayon de 70km.

## ✨ Fonctionnalités

### 🎯 **Navigation & UX**
- **Navigation fluide** avec scroll automatique vers les sections
- **Menu responsive** qui s'adapte au scroll (transparent → opaque)
- **Bouton "Retour en haut"** avec animation
- **Scroll fluide** entre les sections

### 📱 **Design Responsive**
- **Mobile-first** design
- **Breakpoints optimisés** : sm, md, lg, xl
- **Navigation mobile** avec menu hamburger
- **Images et vidéos** adaptatives

### 🎨 **Animations & Interactions**
- **Framer Motion** pour des animations fluides
- **Hover effects** sur tous les éléments interactifs
- **Transitions** CSS et JavaScript
- **Animations au scroll** avec `whileInView`

### 📧 **Formulaire de Contact**
- **Intégration Resend** pour l'envoi d'emails
- **Validation des champs** côté client et serveur
- **Gestion des états** (envoi, succès, erreur)
- **Sélection de service** avec dropdown
- **Feedback visuel** pour l'utilisateur

### 🔍 **SEO Optimisé**
- **Métadonnées complètes** (Open Graph, Twitter)
- **Sitemap dynamique** généré automatiquement
- **Robots.txt** configuré
- **Structure HTML sémantique**
- **Images avec alt text**

## 🚀 Technologies

- **Framework** : Next.js 15 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : Lucide React
- **Email** : Resend
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
   ```

4. **Lancer en développement**
   ```bash
   npm run dev
   ```

## ⚙️ Configuration Resend

Pour activer l'envoi d'emails :

1. **Créer un compte** sur [Resend](https://resend.com)
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
│   ├── Contact.tsx             # Section contact
│   ├── Footer.tsx              # Pied de page
│   ├── Hero.tsx                # Section héro
│   ├── Navigation.tsx          # Navigation
│   ├── Realisations.tsx        # Section réalisations
│   ├── ScrollToTop.tsx         # Bouton retour haut
│   └── Services.tsx            # Section services
└── ...
```

## 🎨 Composants Principaux

### **Navigation**
- **Scroll-aware** : change d'apparence selon le scroll
- **Responsive** : menu hamburger sur mobile
- **Smooth scroll** vers les sections
- **CTA button** "Devis Gratuit"

### **Hero**
- **Vidéo de fond** avec overlay
- **Titre animé** avec gradient
- **Logo** de l'entreprise
- **Call-to-action** buttons

### **Services**
- **3 services principaux** avec images
- **Icons Lucide** pour chaque service
- **Hover effects** sur les cartes
- **Section "savoir-faire"**

### **Réalisations**
- **Galerie d'images** des projets
- **Grid responsive** adaptatif
- **Hover effects** sur les images
- **Section engagements**

### **Contact**
- **Formulaire complet** avec validation
- **Intégration Resend** pour emails
- **Gestion des états** (loading, success, error)
- **Informations de contact** détaillées
- **Zones d'intervention** listées

## 🚀 Déploiement

### **Vercel (Recommandé)**
1. **Connecter le repo** GitHub à Vercel
2. **Configurer les variables d'environnement** :
   - `RESEND_API_KEY`
3. **Déploiement automatique** à chaque push sur `main`

### **Variables d'environnement Vercel**
```env
RESEND_API_KEY=re_your_api_key_here
NEXT_PUBLIC_SITE_URL=https://couvreur-vendee.fr
```

## 📱 Responsive Design

### **Breakpoints**
- **Mobile** : < 640px
- **Tablet** : 640px - 1024px
- **Desktop** : > 1024px

### **Optimisations Mobile**
- **Navigation** : menu hamburger
- **Textes** : tailles adaptées
- **Images** : responsive et optimisées
- **Touch targets** : minimum 44px

## 🔧 Scripts Disponibles

```bash
npm run dev          # Développement local
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
npm run type-check   # Vérification TypeScript
```

## 📈 Performance

- **Images optimisées** avec Next.js
- **Lazy loading** des composants
- **Code splitting** automatique
- **Bundle analyzer** intégré
- **Core Web Vitals** optimisés

## 🔍 SEO

### **Métadonnées**
- **Title** optimisé pour la recherche
- **Description** attractive et informative
- **Keywords** ciblées
- **Open Graph** pour les réseaux sociaux

### **Structure**
- **Sémantique HTML5** correcte
- **Headings** hiérarchisés (H1, H2, H3)
- **Alt text** pour toutes les images
- **Schema markup** (à implémenter)

## 🎯 Améliorations Futures

- [ ] **Blog** avec articles techniques
- [ ] **Galerie** interactive des réalisations
- [ ] **Témoignages clients** avec avis
- [ ] **Calculateur de devis** en ligne
- [ ] **Chat en direct** pour support
- [ ] **PWA** pour installation mobile
- [ ] **Analytics** avancés
- [ ] **A/B testing** des CTA

## 🤝 Contribution

1. **Fork** le projet
2. **Créer une branche** feature
3. **Commit** vos changements
4. **Push** vers la branche
5. **Ouvrir une Pull Request**

## 📄 Licence

MIT License - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Support

Pour toute question ou support :
- **Email** : couvreur.devendee@orange.fr
- **Téléphone** : 06 41 30 25 75 (Bryan) / 06 06 56 01 66 (Cédric)
- **Adresse** : 26 rue Edouard-Monti, 85310 Nesmy

---

**Couvreur de Vendée** - Plus de 15 ans d'expérience au service de votre satisfaction ! 🏠✨
