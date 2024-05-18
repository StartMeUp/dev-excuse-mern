FROM node:20.12.2-slim

WORKDIR /backend

RUN npm i -g nodemon

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3001

CMD npm start