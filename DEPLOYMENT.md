# 🚀 Guide de Déploiement Vercel

## 📋 **Prérequis**
- Compte GitHub
- Compte Vercel
- Projet Next.js configuré

## 🔑 **Étape 1 : Configuration Vercel**

### 1.1 Créer un projet Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"New Project"**
3. Importez votre repo GitHub : `capponuts/couvreur`
4. Cliquez sur **"Deploy"**

### 1.2 Obtenir les informations nécessaires
1. **Token Vercel** :
   - Vercel Dashboard → Settings → Tokens
   - Créez un token nommé `github-actions`
   - Copiez le token (commence par `ver_`)

2. **Project ID** :
   - Vercel Dashboard → Votre Projet → Settings → General
   - Copiez le **Project ID** (commence par `prj_`)

## 🔐 **Étape 2 : Configuration GitHub Secrets**

### 2.1 Aller dans les Secrets GitHub
1. Repo GitHub → **Settings**
2. Menu gauche → **Secrets and variables** → **Actions**
3. Cliquez sur **"New repository secret"**

### 2.2 Ajouter les Secrets
1. **VERCEL_TOKEN** :
   - Name: `VERCEL_TOKEN`
   - Value: `ver_votre_token_ici`

2. **VERCEL_PROJECT_ID** :
   - Name: `VERCEL_PROJECT_ID`
   - Value: `prj_votre_project_id_ici`

## ⚙️ **Étape 3 : Configuration Resend (Optionnel)**

### 3.1 Créer un compte Resend
1. Allez sur [resend.com](https://resend.com)
2. Créez un compte
3. Obtenez votre clé API

### 3.2 Ajouter la clé Resend
1. Dans Vercel Dashboard → Votre Projet → Settings → Environment Variables
2. Ajoutez :
   - **Name**: `RESEND_API_KEY`
   - **Value**: `re_votre_cle_api_ici`
   - **Environment**: Production, Preview, Development

## 🚀 **Étape 4 : Déploiement Automatique**

### 4.1 Vérifier le Workflow
Le fichier `.github/workflows/deploy.yml` est déjà configuré pour :
- Se déclencher à chaque push sur `main`
- Construire le projet
- Déployer automatiquement sur Vercel

### 4.2 Premier Déploiement
1. Faites un push sur la branche `main`
2. Allez dans l'onglet **Actions** de GitHub
3. Vérifiez que le workflow se lance
4. Vérifiez le déploiement sur Vercel

## 🔍 **Vérification du Déploiement**

### 5.1 Vérifier Vercel
1. Vercel Dashboard → Votre Projet
2. Vérifiez que le déploiement est **"Ready"**
3. Cliquez sur l'URL pour tester le site

### 5.2 Vérifier GitHub Actions
1. GitHub → Repo → Actions
2. Vérifiez que le workflow **"Deploy to Vercel"** est vert
3. Cliquez dessus pour voir les détails

## 🐛 **Résolution des Problèmes**

### Erreur "vercel-token not supplied"
- ✅ Vérifiez que `VERCEL_TOKEN` est bien configuré dans GitHub Secrets
- ✅ Vérifiez l'orthographe exacte du nom du secret

### Erreur "vercel-project-id not supplied"
- ✅ Vérifiez que `VERCEL_PROJECT_ID` est bien configuré
- ✅ Vérifiez que l'ID du projet est correct

### Erreur de build
- ✅ Vérifiez que `npm run build` fonctionne en local
- ✅ Vérifiez les logs de build dans GitHub Actions

## 📱 **Test du Site Déployé**

1. **Navigation** : Testez le scroll fluide entre sections
2. **Responsive** : Testez sur mobile et tablette
3. **Formulaire** : Testez l'envoi d'email (si Resend configuré)
4. **Images** : Vérifiez que toutes les images s'affichent
5. **Vidéo** : Vérifiez que la vidéo de fond fonctionne

## 🎯 **URLs Importantes**

- **Site déployé** : `https://votre-projet.vercel.app`
- **Vercel Dashboard** : `https://vercel.com/dashboard`
- **GitHub Actions** : `https://github.com/capponuts/couvreur/actions`

---

**💡 Conseil** : Après la première configuration, tous les futurs pushs sur `main` déclencheront automatiquement un déploiement ! 🚀
