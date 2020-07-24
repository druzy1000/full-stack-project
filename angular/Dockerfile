
FROM node:12.7-alpine AS build
LABEL maintainer="andrew.reyes@ibm.com"
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200 4200
RUN npm run build
CMD npm start