# Step 1

FROM node:14-alpine as build-step

RUN mkdir /app
ARG REACT_APP_CLIENTID
ENV REACT_APP_CLIENTID $REACT_APP_CLIENTID
ARG REACT_APP_DOMAIN
ENV REACT_APP_DOMAIN $REACT_APP_DOMAIN
ARG REACT_APP_AUDIENCE
ENV REACT_APP_AUDIENCE $REACT_APP_AUDIENCE
WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

RUN npm run build

# Stage 2
FROM nginx:1.17.1-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/build /usr/share/nginx/html
EXPOSE 80 
CMD ["nginx", "-g", "daemon off;"]
