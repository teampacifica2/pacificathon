FROM openjdk:8-jre
MAINTAINER pacifica team 2
ENTRYPOINT ["/usr/bin/java", "-jar", "/opt/pacifica/lib/hackaton-api.jar"]
ARG JAR_FILE
ADD target/${JAR_FILE}  /opt/pacifica/lib/hackaton-api.jar
EXPOSE 8090