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
- [ ] `Logging` : ajouter des informations relatives à un paiement (nature du paiement)

## Livrables

- [ ] Le **code source** de l'application conteneurisée
- [ ] Un fichier **readme.md** contenant : un schéma d'architecture de vos conteneurs, les évolutions souhaitées mais non réalisées, et tout ce qui vous passe par la tête :smirk:
- [ ] La liste des use case couverts

## Évaluation

Toutes les applications seront testées par les membres du jury. A niveau de fonctionnalité égal, différents critères permetteront de vous départager :  
- Respect des bonnes pratiques ([guide de bonnes pratiques](https://s3-eu-west-1.amazonaws.com/presentations-pdf/AEG+Conteneurs+Applicatifs+Docker+Guide+Architecture.pdf)) 
- Logique et architecture de la nouvelle application (modularité, découpage, etc.)

# Get started

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
./mvnw tomcat7:run-war [-P=<nom du profile>]
```
Attention : si vous ne specifiez aucun profile (`-P`), l'application s'executera avec le profile `HSQL`

**Accéder à l'application** 
`http://localhost:9966/containerbank/`

## Environnement CaaS Amazon

Un namespace AWS a été attribué à chaque équipe qui dispose donc d'un accès à un environnement AWS EKS complet. 

Pour vous connecter : 
1. Demandez l'IP de votre machine au coach le plus proche
2. Telechargez le fichier `.pem` qui vous a été transféré par mail, puis, executez la commande suivante **dans le dossier ou se trouve le fichier `.pem`**:
  ```
  ssh -i "hackathon-ec2-tp.pem" ec2-user@[IP DE VOTRE MACHINE]
  ```

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

Disponible ici : https://github.com/hackathonpackapp/packapp/blob/master/src/main/resources/db/mysql/initDB.sql 


# Annexes 

## Liens vers les présentations

| Nom | Lien |
|------|-------|
| Présentation 1 | [Lien vers la présentation 1](http://google.com) |
| Présentation 2 | [Lien vers la présentation 2](http://google.com) |
| Présentation 3 | [Lien vers la présentation 3](http://google.com) |
| Présentation 4 | [Lien vers la présentation 4](http://google.com) |​

## Bonnes pratiques

**Bonnes pratiques applicables au hackathon** - Le respect des bonnes pratiques est LE critère d'évaluation le plus important. Nous vous avons préselectionné les bonnes pratiques à ne pas manquer ... allez voir le détail dans le [guide de bonnes pratiques](https://s3-eu-west-1.amazonaws.com/presentations-pdf/AEG+Conteneurs+Applicatifs+Docker+Guide+Architecture.pdf).

| ID | Description |
|------|-------|
| `AEG-Docker-00` | Le Dockerfile est une source et doit donc être considéré comme telle​ |
| `AEG-Docker-00` | Privilégier les applications et services conteneurs-ready​​ |
| `AEG-Docker-00` | Privilégier les middlewares conteneurs-ready​​​ |
| `AEG-Docker-00` | Les bases de données doivent être conteneurs-ready pour être déployées en production |
| `AEG-Docker-00` | Les applications et services conteneurisés doivent être sans états (comme défini dans le [guide d’architecture Cloud Ready](https://s3-eu-west-1.amazonaws.com/presentations-pdf/AEG+Conteneurs+Applicatifs+Docker+Guide+Architecture.pdf)) |​
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
- Emmanuel FORTIN (CA/SILCA)
- Maxime DECALF (CA/SILCA)
