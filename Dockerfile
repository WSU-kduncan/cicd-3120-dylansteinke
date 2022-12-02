# sudo docker run --name myweb2 -v /home/ubuntu/cicd-3120-dylansteinke/website/:/usr/share/nginx/html:ro -d -p 8080:80 nginx

FROM nginx

COPY /website2/ /usr/share/nginx/html/
#COPY /website2/index.html /usr/share/nginx/html/
#COPY /website2/confirm.html /usr/share/nginx/html/
#COPY /website2/images/favicon.ico /usr/share/nginx/html/
#COPY /website2/images/favicon.jpg /usr/share/nginx/html/
#COPY /website2/images/indians.png /usr/share/nginx/html/
#COPY /website2/images/reds.png /usr/share/nginx/html/
#COPY /website2/images/tigers.png /usr/share/nginx/html/
#COPY /website2/scripts/main.js /usr/share/nginx/html/
#COPY /website2/css/confirm.css /usr/share/nginx/html/
#COPY /website2/css/header.css /usr/share/nginx/html/
#COPY /website2/css/index.css /usr/share/nginx/html/
#COPY /website2/css/normalize.css /usr/share/nginx/html/

EXPOSE 80
