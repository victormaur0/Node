FROM node:latest
WORKDIR /server
EXPOSE 5000:3000
COPY ./server/package.json .
COPY ./server.js .
RUN npm install
CMD node server.js