FROM node:14-alpine as base

WORKDIR /src

COPY package*.json ./

EXPOSE 8080

FROM base as production
RUN npm ci
COPY . .
CMD ["node", "index.js"]


FROM base as dev
RUN npm install -g nodemon && npm install
COPY . .
CMD ["npm", "run", "start:dev"]