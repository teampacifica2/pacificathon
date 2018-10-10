FROM openjdk:8-jre
MAINTAINER pur
ENTRYPOINT ["/usr/bin/java", "-jar", "/opt/pur/lib/demo-rest-web.jar"]
ARG JAR_FILE
ADD target/${JAR_FILE}  /opt/pur/lib/demo-rest-web.jar
EXPOSE 8090