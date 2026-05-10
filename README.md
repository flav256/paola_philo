# Paola · Révisions Philo — Bac 2026

Site de révisions pour l'épreuve de philosophie du baccalauréat général (mardi 9 juin 2026, coefficient 8).

Site en ligne : **[flav256.github.io/paola_philo](https://flav256.github.io/paola_philo/)**

---

## 📋 Structure — 9 groupes thématiques

Le programme couvre **17 notions officielles**, regroupées en **9 blocs par affinités thématiques** :

| Bloc | Thème | Notions |
|---|---|---|
| 01 | Le sujet et soi | Conscience, Inconscient |
| 02 | Croire et savoir | Vérité, Raison, Religion |
| 03 | Connaître le réel | Science, Nature |
| 04 | Agir, transformer | Travail, Technique |
| 05 | Création | Art |
| 06 | Communiquer | Langage |
| 07 | Vivre, choisir | Bonheur, Devoir, Liberté |
| 08 | Vivre ensemble | État, Justice |
| 09 | L'expérience | Temps |

À cela s'ajoutent : **Méthodologie** (dissertation + explication de texte), **Repères philosophiques** (29 distinctions), **Sprint final** (fiches flash, citations transverses, annales corrigées).

---

## 📐 Deux formats par notion

Chaque notion existe en **deux versions** :

- **Fiche longue** (~3 pages) — pour l'apprentissage. Format compact à 6 sections : définitions, problématique pivot, 3 thèses clés, 2 citations, plan-type condensé, pièges + liens.
- **Fiche flash** (~1 page) — pour le sprint final. L'essentiel à mémoriser : bullets, citations en gras, plan résumé en 5 lignes.

Chaque fiche est disponible en **3 formats** : HTML (web responsive + mode sombre), Markdown (source pour NotebookLM), PDF (A4 optimisé pour l'impression).

---

## 📁 Architecture des fichiers

```
paola_philo/
├── index.html                         ← Dashboard 9 blocs
├── assets/
│   ├── style.css                      ← Design tokens
│   └── script.js                      ← Thème + progression + countdown
├── fiches/                            ← Fiches longues
│   ├── 01-methode-dissertation.*
│   ├── 02-methode-explication.*
│   ├── 03-conscience.*  → 07-science.*
│   └── (12 notions à venir)
├── flash/                             ← Fiches flash 1 page (à créer)
├── reperes/
│   └── reperes-complets.*
├── annales/                           ← Annales corrigées (à venir)
├── build/
│   └── generate_pdf.py
├── .nojekyll
└── README.md
```

---

## 🗓 Plan de production — sprint mai-juin

| Phase | Période | Livrable |
|---|---|---|
| **A** · Refonte structure | 10–13 mai | Dashboard 9 blocs · template court · refonte des 5 fiches existantes |
| **B** · Nouvelles fiches longues | 14–25 mai | 12 fiches manquantes (Liberté, Bonheur, Devoir, Justice, État, Travail, Technique, Nature, Art, Langage, Religion, Temps) |
| **D** · Fiches flash | 26 mai – 5 juin | 17 mémos 1 page (toutes notions) |
| **E** · Sprint final | 6–8 juin | Annales corrigées + mémo citations transverses |

---

## 📚 État actuel — 10 mai 2026

**Fait** :
- Méthodologie (dissertation + explication)
- Repères philosophiques
- 5 notions au format long : conscience, inconscient, raison, vérité, science
- Conscience reformatée au nouveau format court (template de référence)

**À faire** :
- Refonte format court : inconscient, raison, vérité, science (4)
- Nouvelles fiches longues : 12 notions
- Fiches flash : 17 (toutes notions)
- Annales corrigées récentes
- Mémo citations transverse

---

## 🎯 Format de la fiche longue (~3 pages)

1. **Définitions** — étymologie + sens philosophiques
2. **Problématique pivot** — une seule question, en encadré
3. **Trois thèses clés** — 3 auteurs synthétisés en 1 paragraphe chacun
4. **Citations à mémoriser** — 2 citations, attribution claire
5. **Plan-type condensé** — sujet bac + 3 parties en bullets
6. **Pièges & liens** — 2-3 pièges classiques + pills vers notions liées

---

## 🎧 Podcasts NotebookLM

Certaines fiches ont un podcast NotebookLM intégré (bouton 🎧 sur la fiche). À ce jour :
- Session 01 : Méthodologie de la dissertation
- Session 02 : Méthodologie de l'explication de texte

Les `.md` sont consommables directement par NotebookLM via leur URL raw GitHub :
```
https://raw.githubusercontent.com/flav256/paola_philo/main/fiches/<fiche>.md
```

---

## 🛠 Régénérer les PDFs

```bash
brew install pango   # macOS, une seule fois
pip install weasyprint --break-system-packages
DYLD_FALLBACK_LIBRARY_PATH="/opt/homebrew/lib" python build/generate_pdf.py
```

---

## ⚙️ Stack

- HTML/CSS/JS vanilla, zéro dépendance runtime
- Google Fonts : Fraunces, Crimson Pro, IBM Plex Sans
- Génération PDF : WeasyPrint
- Hébergement : GitHub Pages (branche `main`, racine)
- Pas d'analytics, pas de tracker, `noindex` sur toutes les pages

---

*Bonne révision Paola — bon courage pour le 9 juin. ✒*
