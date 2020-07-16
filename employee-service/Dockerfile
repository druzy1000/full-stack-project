FROM openjdk:8-jdk-alpine
LABEL maintainer="andrew.reyes@ibm.com"
ADD target/employee-service-0.0.1-SNAPSHOT.jar employee-service-0.0.1-SNAPSHOT.jar
EXPOSE 8082
CMD ["java","-jar","employee-service-0.0.1-SNAPSHOT.jar"]
