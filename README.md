# Relevé Électricité — version Bureau (Windows / macOS)

Application de facturation électricité et eau par sous-compteurs, packagée avec Electron.

## Prérequis

- [Node.js](https://nodejs.org) (version 18 ou plus récente)
- Une connexion internet **au moment du build uniquement** (pour télécharger Electron une seule fois)

## Installation des dépendances

```
npm install
```

## Tester l'application (sans créer d'installeur)

```
npm start
```

## Créer les installeurs

### Windows
```
npm run dist:win
```
Installeur `.exe` (NSIS) et version portable générés dans `dist/`.

### macOS
À lancer **depuis un Mac** (Apple ne permet pas de créer un `.dmg` depuis un autre système) :
```
npm run dist:mac
```
Le fichier `.dmg` sera généré dans `dist/`, compatible Mac Intel (x64) et Apple Silicon (arm64).

⚠️ Sans certificat de développeur Apple, l'utilisateur final devra faire un clic droit → "Ouvrir" la première fois (Gatekeeper), car l'app ne sera pas notarisée.

### Build Mac automatique via GitHub Actions

Ce dépôt contient `.github/workflows/build-mac.yml`, qui compile automatiquement le `.dmg` sur un runner macOS à chaque envoi sur `main` (ou manuellement depuis l'onglet **Actions** → **Build macOS (.dmg)** → **Run workflow**). Le `.dmg` est ensuite téléchargeable dans les **Artifacts** du run.
