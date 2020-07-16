FROM openjdk:8-jdk-alpine
LABEL maintainer="andrew.reyes@ibm.com"
ADD target/login-service-0.0.1-SNAPSHOT.jar login-service-0.0.1-SNAPSHOT.jar
EXPOSE 8081
CMD ["java","-jar","login-service-0.0.1-SNAPSHOT.jar"]
