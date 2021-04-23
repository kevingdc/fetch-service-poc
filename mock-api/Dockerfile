FROM node:14.16.1-alpine3.13

WORKDIR /app

COPY package*.json ./

EXPOSE 8000

RUN npm install -g nodemon && npm install

COPY . .

CMD ["nodemon", "index.ts"]
