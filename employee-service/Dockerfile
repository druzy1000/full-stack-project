###### Uncomment only to rebuild springboot app #######
# FROM maven:3-jdk-11 as target
# RUN mkdir -p /build
# WORKDIR /build
# COPY pom.xml /build
# RUN mvn -B dependency:resolve dependency:resolve-plugins
# COPY src /build/src
# RUN mvn package -DskipTests

FROM openjdk:8-jdk-alpine
LABEL maintainer="andrew.reyes@ibm.com"
ADD target/employee-service-0.0.1-SNAPSHOT.jar employee-service-0.0.1-SNAPSHOT.jar
EXPOSE 8082
CMD ["java","-jar","employee-service-0.0.1-SNAPSHOT.jar"]
