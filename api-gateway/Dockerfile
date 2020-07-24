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
ADD target/api-gateway-0.0.1-SNAPSHOT.jar api-gateway-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java","-jar","api-gateway-0.0.1-SNAPSHOT.jar"]
