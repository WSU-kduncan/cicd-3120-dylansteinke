# Project 5
I am completing this project with an EC2 instance.
## Part 1 - Dockerize it
- How to install Docker: ([Source](https://www.simplilearn.com/tutorials/docker-tutorial/how-to-install-docker-on-ubuntu))
```
1. sudo apt-get remove docker docker-engine docker.io
2. sudo apt-get update
3. sudo apt install docker.io
4. suo snap install docker
5. docker --version
6. sudo docker run hello-world
```
- How to build the container:  
`sudo docker build -f Dockerfile -t website`  
Dockerfile is the name of the file being used to build the image  
website is the name of the image  

- How to run the container:  
`sudo docker run --name webserv -p 8080:80 website`  

- How to view the project running:  
Go to web browser on local host and go to: `http://ip:port` in my case it would be `http://23.20.4.36:8080`
![proof of container running](images/Part1.png)  

## Part 2 - GitHub Actions and DockerHub
- Process to create public repo in DockerHub  
Once at hub.docker.com and signed in, click Create repository>add a name (in my case I did ceg3120)>make sure Public is selected>create
- How to authenticate with DockerHub via CLI using DockerHub credentials  
    1. Use this command: `sudo docker login -u username` so in my case it would be `sudo docker login -u dylansteinke`  
    2. Then enter your password correctly.  
  
    Instead of using a simple username and password, I would recoommend using an Access Token to signin instead. By doing this, we also will not have to worry about the password being stored in a file anywhere like we do with the username and password method. With this case, a new token is created on DockerHub, then copied as the password to be used for the CLI for example instead of the users password.  
- How to push container to DockerHub  
    1. Use this command to build the image: `sudo docker build -t username/repo` so in my case `sudo docker build -t dylansteinke/ceg3120` . 
    2. Then push to dockerhub using: `sudo docker push username/repo` so in my case `sudo docker push dylansteinke/ceg3120`  
- Configuring GitHub secrets  
    I created two secrets, one which was my username and one which was my password  
    Username: `DOCKER_USERNAME`  
    Passowrd: `DOCKER_TOKEN`  
- Behavior of GitHub workflow  

## Part 3 - Deployment