# Bienvenue au Hackathon PackApp !

L’objectif principal est de conteneuriser et API-ser l’application containerbank afin de pouvoir la déployer sur le CaaS AWS. Vous l'avez compris, vous devrez découper l'application de la plus belle façon qui soit . Consignes générales : 
- :heavy_check_mark: **L’application doit être fonctionnelle**, c’est-à-dire couvrir tous les use cases exposés ci-après
- :computer: **Aucune restriction ne s’applique au design de l’interface utilisateur** : libre à vous de la modifier du moment qu'elle permet de couvrir tous les use cases
- :wink: **Carte blanche** ! Modifiez, découpez, réarchitecturez, détruisez : l'application doit tourner sur le CaaS !  

## Use cases

- [ ] `ViewAdvisors` : voir une liste de conseillers et leurs spécialités (none, savings, credits ou insurance)<br/>
- [ ] `ViewCustomer` : voir les informations relatives à un client<br/>
- [ ] `EditCustomer` : mettre à jour les informations relatives à un client<br/>
- [ ] `AddCustomer` : ajouter un nouveau client au système<br/>
- [ ] `ViewCard` : voir les informations relatives à une carte bleue<br/>
- [ ] `EditCard` : mettre à jour les informations relatives à une carte bleue<br/>
- [ ] `AddCard` : ajouter une nouvelle carte bleue au système<br/>
- [ ] `ViewPayment` : voir des informations relatives à l'historique de paiement d’une carte bleue<br/>
- [ ] `AddPayment` : ajouter des informations relatives à un paiement (nature du paiement)<br/>
- [ ] `Monitoring` : monitorer chaque appels et leur durée<br/>
- [ ] `Logging` : centraliser les logs de l'application

## Livrables

- [ ] Le **code source** de l'application conteneurisée
- [ ] Un fichier **readme.md** contenant : un schéma d'architecture de vos conteneurs, les évolutions souhaitées mais non réalisées, et tout ce qui vous passe par la tête :smirk:
- [ ] La liste des use case couverts

## Évaluation

Toutes les applications seront testées par les membres du jury. A niveau de fonctionnalité égal, différents critères permetteront de vous départager :  
- Respect des bonnes pratiques ([guide de bonnes pratiques](https://s3-eu-west-1.amazonaws.com/presentations-pdf/AEG+Conteneurs+Applicatifs+Docker+Guide+Architecture.pdf)) 
- Logique et architecture de la nouvelle application (modularité, découpage, etc.)

# Get started

## Obligatoire : indiquer son nom sur son ordinateur

Avant tout chose, vous devez indiquer votre nom sur le ruban blanc collé sur votre ordinateur. Cela vous permettra de retrouver votre poste le matin en arrivant.

## Accès au code source

```
git clone https://github.com/wavestone/hackathonpackapp/containerbank.git
cd containerbank
```

## Configuration de la base de données

Le stockage et l'accès aux données de l'application a été préconfigurée avec deux profiles : 
- **HSQL (par defaut)** : l'application tournera toute seule, sans aucune configuration de votre part
- **MySQL** : par défaut, les identifiants pour accéder à la base de données sont definis dans le fichier `pom.xml` :

  ```
  <properties>
      <jpa.database>MYSQL</jpa.database>
      <jdbc.driverClassName>com.mysql.cj.jdbc.Driver</jdbc.driverClassName>
      <jdbc.url>jdbc:mysql://localhost:3306/containerbank?useUnicode=true</jdbc.url>
      <jdbc.username>root</jdbc.username>
      <jdbc.password>root</jdbc.password>
  </properties>
  ```      
  
  Avant de démarrer, il est nécessaire de créer une base de données et de l'intialiser.
  
  ```   
  mysql -uroot -p < src/main/ressources/db/mysql/initDB.sql # création de la base de données 
  mysql -uroot -p < src/main/ressources/db/mysql/populateDB.sql # initialisation de la base de données
  ```
**Attention : faites comme bon vous semble, aucune des deux méthodes ci-dessus ne sont imposées**

## Packager, lancer et accéder à l'application

**Packager l'application en un fichier `.war`**
```
mvn clean package
```
**Lancer l'application via la commande**
```
mvn tomcat7:run-war [-P=<nom du profile>]
```
Attention : si vous ne specifiez aucun profile (`-P`), l'application s'executera avec le profile `HSQL`

**Accéder à l'application** 
`http://localhost:9966/containerbank/`

## Environnement CaaS Amazon

Un namespace AWS a été attribué à chaque équipe qui dispose donc d'un accès à un environnement AWS EKS complet. Pour pouvoir intéragir avec l'EKS, vous devez copier la configuration de votre équipe (qui a été envoyée au premier nom affiché sur la table) dans le dossier `.kube` :
```
cp packapp[TEAM]-kubeconfig ~/.kube/config
```
## Versionning

Aucun outil de versionning n'a été reservé pour les équipes : **libre à vous d'utiliser l'outil de votre choix** (Github, Gitlab, CodeCommit, etc.), à condition de nous donner les accès pour l'évaluation !

# L'application

## Architecture

L'application containerbank dispose d'une architecture 3-tiers classique (Presentation -> Service -> Repository).

<img src="https://raw.githubusercontent.com/hackathonpackapp/containerbank/master/readme_architecture-overview.png"
     alt="Architecture overview"
     width="70%" />

### Diagramme de classe 

<img src="https://raw.githubusercontent.com/hackathonpackapp/containerbank/master/readme_class-diagram.png"
     alt="Diagramme de classe"
     width="70%" />

### Diagramme fonctionnel 

<img src="https://raw.githubusercontent.com/hackathonpackapp/containerbank/master/readme_functional-diagram.png"
     alt="Diagramme fonctionnel"
     width="70%" />

## Modèle de données

Disponible ici : https://raw.githubusercontent.com/hackathonpackapp/containerbank/master/src/main/resources/db/mysql/initDB.sql 


# Annexes 

## Liens vers les présentations

| Nom | Lien |
|------|------|
| Guide de bonnes pratiques | [Lien vers la présentation](https://s3-eu-west-1.amazonaws.com/presentations-pdf/AEG+Conteneurs+Applicatifs+Docker+Guide+Architecture.pdf) |
| Guide d'architecture Cloud-Ready | [Lien vers la présentation](https://s3-eu-west-1.amazonaws.com/presentations-pdf/AEG+-+Cloud+Ready+-+Guide+d'architecture.pdf) |
| Présentation de l'évènement |[Lien vers la présentation](https://s3-eu-west-1.amazonaws.com/presentations-pdf/CA+SA+-+Hackathon+Container+-+Pr%C3%A9sentation+de+l'%C3%A9v%C3%A8nement.pdf) |
| Introduction aux Conteneurs |[Lien vers la présentation](https://s3-eu-west-1.amazonaws.com/presentations-pdf/CA+SA+-+Hackathon+Container+-+Introduction+Container.pdf) |
| Support Atelier et TP#1 |[Lien vers la présentation](https://s3-eu-west-1.amazonaws.com/presentations-pdf/CA+SA+-+Hackathon+Container+-+Atelier+et+TP+%231.pdf) |
| Support Atelier et TP#2 |[Lien vers la présentation](https://s3-eu-west-1.amazonaws.com/presentations-pdf/CA+SA+-+Hackathon+Container+-+Atelier+et+TP+%232.pdf) |
| Support Atelier et TP#3 |[Lien vers la présentation](https://s3-eu-west-1.amazonaws.com/presentations-pdf/CA+SA+-+Hackathon+Container+-+Atelier+et+TP+%233.pdf) |
| Support Atelier et TP#4 |[Lien vers la présentation](https://s3-eu-west-1.amazonaws.com/presentations-pdf/CA+SA+-+Hackathon+Container+-+Atelier+et+TP+%234.pdf) |

## Bonnes pratiques

**Bonnes pratiques applicables au hackathon** - Le respect des bonnes pratiques est LE critère d'évaluation le plus important. Nous vous avons préselectionné les bonnes pratiques à ne pas manquer ... allez voir le détail dans le [guide de bonnes pratiques](https://s3-eu-west-1.amazonaws.com/presentations-pdf/AEG+Conteneurs+Applicatifs+Docker+Guide+Architecture.pdf).

| ID | Description |
|------|-------|
| `AEG-Docker-00` | Le Dockerfile est une source et doit donc être considéré comme telle​ |
| `AEG-Docker-00` | Privilégier les applications et services conteneurs-ready​​ |
| `AEG-Docker-00` | Privilégier les middlewares conteneurs-ready​​​ |
| `AEG-Docker-00` | Les bases de données doivent être conteneurs-ready pour être déployées en production |
| `AEG-Docker-00` | Les applications et services conteneurisés doivent être sans états (comme défini dans le [guide d’architecture Cloud Ready](https://s3-eu-west-1.amazonaws.com/presentations-pdf/AEG+-+Cloud+Ready+-+Guide+d'architecture.pdf)) |​
| `AEG-Docker-00` | En production, le principe d’immutabilité des conteneurs doit être respecté |​
| `AEG-Docker-00` | Un conteneur doit être léger (consomme peu de ressources) |​
| `AEG-Docker-00` | Au moment de l’instanciation d’un conteneur, aucun appel à des gestionnaires de sources externes n’est autorisé |​
| `AEG-Docker-00` | Le package de l’application doit contenir une/des image(s) ainsi qu’un descripteur |​
| `AEG-Docker-00` | Un conteneur ne doit exécuter qu’un seul processus​ et ne doit écrire que sur la sortie « stdout »​ |​
| `AEG-Docker-00` | Un conteneur ne peut accéder aux volumes du filesystem qu’en lecture​ |​

# Des questions ? 

Contactez les coachs : 
- Franck LENORMAND (Wavestone)
- Geoffray MENUDIER (Wavestone)
- Ferréol GODEBARGE (Wavestone)
- Soufiance AL HYAR (Wavestone)
- Nicolas HUSSER (Wavestone)
- Emmanuel FORTIN (CA/SILCA)
- Maxime DECALF (CA/SILCA)
- Marc HELLOCO (CA/CASA-AEG)
