FROM node:16-alpine

WORKDIR /app

COPY ../backend/package*.json ./

RUN npm install

COPY . . 

EXPOSE 3000

CMD [ "npm", "start" ]