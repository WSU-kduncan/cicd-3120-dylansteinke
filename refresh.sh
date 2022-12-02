docker stop site
docker ps -a
docker rm site
docker ps -a
docker pull dylansteinke/ceg3120:latest
docker images
docker run -d -p 8080:80 --name site dylansteinke/ceg3120
