# Pacifica Team 2

## lancement de l'application

* gestion des logs

ajouter la variable de JVM : -Dlog_path=/home/hackathon/logs

* création de l'image

mvn clean install

* lancer l'image

sudo docker run -p8090:8090 -e"log_path=/home/hackathon/logs"  --name=hackathon  bd3d

