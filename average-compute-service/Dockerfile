FROM node:14.16.1-alpine3.13

WORKDIR /app

COPY package*.json ./

RUN npm install -g nodemon && npm install

COPY . .

CMD ["nodemon", "index.ts"]
