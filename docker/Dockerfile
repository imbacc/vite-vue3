FROM nginx:alpine
COPY ./dist /usr/share/nginx/html
COPY ./docker/nginx.conf /etc/nginx/conf.d/dk.conf

RUN mv /etc/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf.bak

EXPOSE 8088

# start nginx
CMD ["nginx", "-g", "daemon off;"]