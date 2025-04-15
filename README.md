# Projets SQL/NoSQL

Ce dépôt contient plusieurs projets liés à la gestion des bases de données, couvrant à la fois des systèmes SQL et NoSQL. 
Chaque projet est conçu pour résoudre des problèmes spécifiques en matière de gestion des données.
### 1. Gestion des Ressources Humaines avec SQL
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
