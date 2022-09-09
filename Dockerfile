FROM node:latest as build-stage
ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM nginxinc/nginx-unprivileged as production-stage
USER root
RUN mkdir /app
USER nginx
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
