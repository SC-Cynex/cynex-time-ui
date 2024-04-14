# Etapa de compilação
FROM node:alpine AS build

WORKDIR /usr/src/cynex-time-ui

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build

# Etapa final
FROM nginx:alpine

COPY --from=build /usr/src/cynex-time-ui/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
