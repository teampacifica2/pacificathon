# Pacifica Team 2

## lancement de l'application

* gestion des logs

ajouter la variable de JVM :

 ````
 -Dlog_path=/home/hackathon/logs
````

* création de l'image via maven

````
sudo mvn clean install
````

* lancer l'image

supression du container précédent:
````
sudo docker rm hackathon
````


Création et lancement du nouveau container:
````
sudo docker run -p8090:8090 -e"log_path=/home/hackathon/logs" --network="host" --name=hackathon  teampacifica2/hackaton:0.0.1-SNAPSHOT
````
