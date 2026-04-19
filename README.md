# Paola · Révisions Philo — Bac 2026

Programme de révisions progressif, du 23 avril au 14 juin 2026, pour l'épreuve de philosophie du baccalauréat général (lundi 15 juin 2026, 8h–12h, coefficient 8).

Site en ligne : **[flav256.github.io/paola_philo](https://flav256.github.io/paola_philo/)**

---

## 📋 Structure du programme

**8 blocs progressifs** couvrant les 17 notions officielles + méthodologie + repères + annales :

| Bloc | Semaine | Thème |
|---|---|---|
| 01 | 23–29 avril | Fondations méthodologiques (Conscience, Inconscient, Repères) |
| 02 | 30 avril–6 mai | Connaissance & vérité (Raison, Vérité, Science) |
| 03 | 7–13 mai | Nature, Technique, Travail |
| 04 | 14–20 mai | Art, Langage, Religion |
| 05 | 21–27 mai | Liberté, Bonheur, Temps |
| 06 | 28 mai–3 juin | Devoir, Justice, État |
| 07 | 4–10 juin | Transversal & annales corrigées |
| 08 | 11–14 juin | Sprint final — fiches flash |

---

## 📁 Architecture des fichiers

```
paola_philo/
├── index.html                         ← Dashboard principal
├── assets/
│   ├── style.css                      ← Design (cahier philo)
│   └── script.js                      ← Thème + progression + countdown
├── fiches/
│   ├── 01-methode-dissertation.html + .md + .pdf
│   ├── 02-methode-explication.html + .md + .pdf
│   ├── 03-conscience.html + .md + .pdf
│   ├── 04-inconscient.html + .md + .pdf
│   ├── 05-raison.html + .md + .pdf
│   ├── 06-verite.html + .md + .pdf
│   └── 07-science.html + .md + .pdf
├── reperes/
│   └── reperes-complets.html + .md + .pdf
├── build/
│   └── generate_pdf.py                ← Régénérer les PDFs depuis le HTML
├── .nojekyll                          ← Désactive Jekyll sur GitHub Pages
└── README.md
```

Chaque fiche existe en **3 formats** :
- **HTML** : consultation web (responsive, mobile + desktop, mode sombre)
- **Markdown** : source propre pour import dans NotebookLM
- **PDF** : impression / archive (mise en page A4 optimisée)

---

## 🎯 Structure d'une fiche notionnelle (3 pages)

1. Définitions (sens courant, sens philosophiques, étymologie)
2. Problématiques classiques
3. Repères à mobiliser
4. Thèses majeures (3 à 6 auteurs synthétisés)
5. Citations clés
6. Exemples concrets
7. Sujets tombés au bac
8. Plan-type détaillé (sujet + problématique + 3 parties rédigées)
9. Pièges à éviter
10. Liens avec les autres notions

---

## 🎧 Utiliser NotebookLM pour les podcasts

Chaque fiche possède un `.md` accessible en brut via GitHub :

```
https://raw.githubusercontent.com/flav256/paola_philo/main/fiches/03-conscience.md
```

Dans **NotebookLM** :
1. Créer un nouveau notebook pour la révision
2. « Add source » → « Website » → coller l'URL raw de la fiche
3. Générer un « Audio overview » pour avoir un podcast de 10–15 min
4. Idéal pour écouter en voiture, à la salle, avant de dormir

---

## 🖨 Imprimer les fiches

Deux options :
- **Depuis le navigateur** : chaque fiche a un CSS `@media print` optimisé (A4, 1.6cm de marges, masquage du header/navigation). Ctrl/Cmd + P sur la fiche.
- **PDF pré-généré** : bouton « ⬇ PDF » en haut de chaque fiche.

Pour régénérer tous les PDFs :
```bash
pip install weasyprint
python build/generate_pdf.py
```

---

## ✅ Suivi de progression

Sur le dashboard, cocher la case ✓ à gauche de chaque fiche une fois revue. La progression est sauvegardée dans le `localStorage` du navigateur — **persistante sur un même appareil/navigateur**, sans compte à créer.

Pour repartir à zéro : vider le localStorage du site dans les paramètres du navigateur.

---

## 🔧 Stack technique

- HTML/CSS/JS vanilla, zéro dépendance runtime
- Fonts via Google Fonts (Fraunces, Crimson Pro, IBM Plex Sans)
- Génération PDF par WeasyPrint (Python)
- Hébergement GitHub Pages (branche `main`, racine)
- Pas d'analytics, pas de tracker, pas de cookie
- `noindex` sur toutes les pages — non indexé par les moteurs de recherche

---

## 📅 Calendrier de livraison

- **Batch 1** ✓ — Méthodologie + Conscience + Inconscient + Repères
- **Batch 2** ✓ — Raison / Vérité / Science
- **Batch 3** — Nature / Technique / Travail (début mai)
- **Batch 4** — Art / Langage / Religion (mi-mai)
- **Batch 5** — Liberté / Bonheur / Temps (fin mai)
- **Batch 6** — Devoir / Justice / État (début juin)
- **Batch 7** — Annales corrigées & transversal
- **Batch 8** — Fiches flash finales

---

*Bonne révision, Paola — et bon courage pour le 15 juin. ✒*
