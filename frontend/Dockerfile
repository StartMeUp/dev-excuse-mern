FROM node:20.12.2-slim

WORKDIR /frontend

COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD npm run dev