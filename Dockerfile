FROM node:latest as build-stage
WORKDIR /app
RUN npm install -g yarn
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY ./ .
RUN yarn run build

FROM nginxinc/nginx-unprivileged as production-stage
USER root
RUN mkdir /app
USER nginx
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf
