# DevOps Mini-Projet 2

Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations

- N° de groupe : 25
- Membres du groupe :
  - [Luca NICOLAS](https://github.com/IweZix)
  - [Kilian De Smet](https://github.com/kilianDeSmet)
  - [Arthur Stoffels](https://github.com/Arthi2507)

- [Repo GitHub](https://github.com/IweZix/devops-mini-proj-tdd-greetings)


## Énoncé

### Pré-requis :

- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests

### Ajouter ce fichier MD à votre mini-projet-1

Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue

L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request

Ouvrez une Pull Request / Merge Request
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.

Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.

```bash
Ce script représente une action github qui s'éxécute automatiquement lorsqu'une nouvelle pull request est ouverte ou éditée. 
1. Checkout du code pour récupérer le code source de l'environnement d'éxécution (pour que le code de la pull request soit disponible soit disponible dans les étpes suivantes).
2. Installation des dépendances du projet.
3. Informe l'utilisateur que la pipeline a commencé.
4. Formate le code avec Prettier.
5. Lint le code avec ESLint.
6. Teste le code et le taux de coverage avec Jest.
7. Build le code avec Webpack.
8. Informe l'utilisateur que la pipeline est terminée.
9. Affiche un message de succès.
```

- En particulier : à quoi sert le “on” ? dans votre fichier YML ? Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ?

```bash
Le "on" est l'élément qui permet de définir les événements qui déclencheront l'action.
"on push" déclenche l'action lorsqu'un push est effectué sur la branche principale.
"on pull request" déclenche l'action lorsqu'une pull request est ouverte ou éditée.
Pour un développeur junior, nous conseillerions plus "on pull request" car cela permet de tester le code avant de le merger sur la branche principale. Cele leurs permettra de corriger les erreurs avant de merger le code.
```

- Quelle est la différence entre run et run_on ? Expliquez par rapport à votre pipeline.

```bash
"run_on" permet de définir l'environnement d'éxécution de l'action.
"run" permet d'éxécuter une commande dans l'environnement d'éxécution.
```

- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline.

```bash
On utilise "use" pour définir l'action à éxécuter.
On utilise "run" pour éxécuter une commande dans l'environnement d'éxécution.
```

- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline.

```bash
Alors oui, on peut intervertir les étapes dans notre pipeline. Cependant, il faut faire attention à l'ordre dans lequel on les intervertit. Par exemple, on ne peut pas intervertir les étapes d'installation des dépendances et de build car le build a besoin des dépendances pour fonctionner.
```

- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ? Quelles questions devriez-vous vous poser ?

```bash
Nous devriez déjà ajouter le programme secure_app dans le dossier de notre projet. Et Devrions nous poser les questions suivantes:
- Quel est le but de ce programme ?
- Est ce qu'il reprend les besoins des tests de sécurité ?
- Est ce que ce programme est compatible avec notre projet ?
- Quelles sont les dépendances de ce programme ?
- Comment automatiser les tests de sécurité ?
```
