FROM openjdk:8-jdk-alpine
LABEL maintainer="andrew.reyes@ibm.com"
ADD target/api-gateway-0.0.1-SNAPSHOT.jar api-gateway-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java","-jar","api-gateway-0.0.1-SNAPSHOT.jar"]
