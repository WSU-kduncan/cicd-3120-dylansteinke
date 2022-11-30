# sudo docker run --name myweb2 -v /home/ubuntu/cicd-3120-dylansteinke/website/:/usr/share/nginx/html:ro -d -p 8080:80 nginx

FROM nginx

COPY /website/index.html /usr/share/nginx/html

EXPOSE 80
