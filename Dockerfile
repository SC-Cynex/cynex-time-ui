FROM node:14-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:14-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "3000"]