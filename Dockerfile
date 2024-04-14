# Etapa de compilação
FROM node:alpine AS build

WORKDIR /usr/src/cynex-time-ui

COPY package*.json ./

RUN npm install --silent

COPY . .

RUN npm run build

RUN echo "Conteúdo do diretório atual do build:"
RUN ls -al

# Etapa final
FROM nginx:alpine

RUN echo "Conteúdo do diretório atual da etapa final:"
RUN ls -al

COPY --from=build /usr/src/cynex-time-ui/dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
