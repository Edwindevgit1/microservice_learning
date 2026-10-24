FROM node:24-alpine

WORKDIR /app

COPY product-service/package*.json ./

RUN npm ci

COPY product-service/ .

RUN npm run build

EXPOSE 5001

CMD ["npm", "start"]