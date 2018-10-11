# Bienvenue sur l'application de l'equipe "TEAM PACIFICA"


## Architecture

L'appli est architectuée de la manière suivante :

![alt text](doc/archi.png)

## Packaging

* Construction des images avec Maven
    * automatisation des constructions des images docker
    * versioning 
* api: backend spring boot 
    * gestion simplifiée des paramètres de déploiement (clé/valeur)
    * démarrage rapide de l'application
* fontend: 
    * Angular développement et déploiement rapide




## Livrables

- [x] Le **code source** de l'application conteneurisée
- [x] Le **readme.md**
- [x] La liste des use case couverts

	- [x] `ViewAdvisors` : voir une liste de conseillers et leurs spécialités (none, savings, credits ou insurance)<br/>
	- [x] `ViewCustomer` : voir les informations relatives à un client<br/>
	- [x] `EditCustomer` : mettre à jour les informations relatives à un client<br/>
	- [x] `AddCustomer` : ajouter un nouveau client au système<br/>
	- [ ] `ViewCard` : voir les informations relatives à une carte bleue<br/>
	- [ ] `EditCard` : mettre à jour les informations relatives à une carte bleue<br/>
	- [ ] `AddCard` : ajouter une nouvelle carte bleue au système<br/>
	- [ ] `ViewPayment` : voir des informations relatives à l'historique de paiement d’une carte bleue<br/>
	- [ ] `AddPayment` : ajouter des informations relatives à un paiement (nature du paiement)<br/>
	- [ ] `Monitoring` : monitorer chaque appels et leur durée<br/>
	- [x] `Logging` : centraliser les logs de l'application

Les descripteurs de déploiement Kubernetes sont dans le dossier tools.

## Accès

**Accéder au code source**
```
https://github.com/pacificathon/hackathonpackapp/containerbank.git
```
**Accéder à l'application** 
`http://ec2-user@11.eu-west-1.compute.amazonaws.com:9966/containerbank/`

# L'application

## Architecture

L'application containerbank est séparée entre la une partie front (repertoire frontEnd) et une partie back (repertoire containerbank-api)
```mermaid
graph LR
A(frontEnd) --> B(containerbank-api)
```
Partie front :


Partie back :


## Docker



# L'équipe 
- Jean-Patrick GUILLY 
- Patrick URBANSKI
- Thomas MARTZOLFF
- Nicolas LEMAIRE
