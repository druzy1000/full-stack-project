FROM openjdk:8-jdk-alpine
LABEL maintainer="andrew.reyes@ibm.com"
ADD target/discovery-service-0.0.1-SNAPSHOT.jar discovery-service-0.0.1-SNAPSHOT.jar
EXPOSE 8761
CMD ["java","-jar","discovery-service-0.0.1-SNAPSHOT.jar"]
