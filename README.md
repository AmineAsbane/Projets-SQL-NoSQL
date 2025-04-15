# Projets SQL/NoSQL

Ce dépôt contient plusieurs projets liés à la gestion des bases de données, couvrant à la fois des systèmes SQL et NoSQL. 
Chaque projet est conçu pour résoudre des problèmes spécifiques en matière de gestion des données.
### 1. Système Informations RH-SQL avec SQL
Ce projet implémente un système de gestion des ressources humaines (RH) en SQL. Il permet de suivre les employés, leurs performances, leurs heures de travail, et les projets auxquels ils participent. Les différentes entités, comme les employés, les départements, les projets et les tâches, sont gérées via des tables interconnectées.

#### Technologies utilisées :
- PostgreSQL 
- SQL
- Modélisation de base de données relationnelle

#### Fonctionnalités :
- Suivi des employés et de leurs informations personnelles.
- Gestion des départements et des projets.
- Suivi des heures de travail des employés.
- Gestion des évaluations de performance des employés.
- Requêtes SQL pour obtenir des informations sur les employés, les projets, les performances, etc.

#### Structure des tables :
1. **Departments** : Contient les départements de l'entreprise.
2. **Employees** : Contient les informations relatives aux employés, y compris leurs salaires, titres et managers.
3. **Projects** : Contient les informations sur les projets de l'entreprise.
4. **Tasks** : Permet de suivre les tâches assignées aux employés dans le cadre des projets.
5. **Work_Hours** : Suivi des heures de travail des employés.
6. **Performance_Evaluations** : Suivi des évaluations de performance des employés.

#### Exemple de requêtes SQL :
- Affichage des employés ayant travaillé le plus d'heures.
- Suivi de l'avancement des projets.
- Affichage des meilleures évaluations de performance.
- Répartition des employés par département.
- Calcul du salaire total par département.

#### Objectifs du projet :
- Créer une base de données complète pour la gestion des ressources humaines.
- Fournir des outils d'analyse pour les managers et les responsables RH afin de prendre des décisions éclairées.
- Simplifier le suivi des employés, des projets et des performances au sein de l'entreprise.
  
### 2. Analyse des Ventes d'une Boutique en Ligne avec SQL

Ce projet consiste à modéliser et analyser les ventes d'une boutique en ligne. Il permet de manipuler des données complexes et d'appliquer des requêtes SQL avancées.
Le jeu de données utilisé est le dataset "Online Retail" provenant de l'[UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/online+retail).
#### Technologies utilisées :
- MySQL
- SQL
#### Fonctionnalités :
- Analyse des ventes par pays.
- Identification des produits les plus vendus.
- Analyse du comportement des clients (fréquence d'achat, panier moyen).
- Détection des tendances saisonnières dans les ventes.


### 3 Statistiques Reservations Hôtel avec MongoDB

Ce projet implémente un système de gestion des réservations d'hôtel à l'aide de **MongoDB**. Il permet de suivre les réservations des clients, d'analyser les tendances et d'optimiser les performances grâce à des index et des agrégations sur les données des réservations.

## **Technologies utilisées :**
- **MongoDB** : Base de données NoSQL pour le stockage des réservations.

## **Fonctionnalités :**
- **Analyse des réservations par pays** : Obtenir un aperçu des réservations selon les pays des clients.
- **Identification des chambres les plus réservées** : Analyser les types de chambres les plus populaires.
- **Analyse des réservations selon les saisons** : Analyser les réservations et les ventes en fonction des saisons.
- **Analyse des clients les plus fréquents** : Identifier les clients ayant effectué le plus de réservations.
- **Optimisation des performances** : Création d'index pour améliorer les performances des requêtes sur des champs fréquemment utilisés.




