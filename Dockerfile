FROM nginx:stable
COPY . /usr/share/nginx/html/aled

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]