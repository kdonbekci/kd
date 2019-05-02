FROM node:lts-slim

WORKDIR /usr/kd/

RUN mkdir -p client; mkdir -p client/dist; mkdir -p server


COPY ./client/dist ./client/dist
COPY ./server ./server

WORKDIR /usr/kd/server
RUN npm install

EXPOSE 8080

CMD [ "npm", "start" ]
