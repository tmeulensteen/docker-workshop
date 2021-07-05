# docker-workshop commands

## finding the version
```
docker --version
```
## downloading image
If you need to pull an image from a docker repository (e.q. dockerhub). You can use the following example to download the Nginx webserver image.
``` 
docker pull nginx
```

## view images
List all the docker images pulled on the system with image details such as TAG/IMAGE ID/SIZE etc.

```
docker images
```

## run
Run the docker image mentioned in the command. This command will create a docker container in which the nginx HTTP server will run.

``` 
docker run -it -d nginx
```
-it means interactive terminal, debuginformation is logged in the current terminal
-d run as daemon, debuginformation is not logged in current terminal

### what’s running?
ps lists all the docker containers are running with container details.

``` 
docker ps
```


ps -a
List all the docker containers running/exited/stopped with container details.
```
docker ps -a
```

## logs
Fetch all the console output from a container id running in daemon mode
```
docker logs 912902c51449
```

## exec
Access the docker container and run commands inside the container. I am accessing the apache server container in this example.

``` 
docker exec -it 912902c51449 bash
```

## removing container
Remove the docker container with container id mentioned in the command.

```
docker rm 912902c51449
```

## removing image
Remove the docker image with the docker image id mentioned in the command

```
docker rmi nginx
```

## restart Docker
Restart the docker container with container id mentioned in the command.

```
docker restart 912902c51449
```

## stopping Docker
Stop a container with container id mentioned in the command.

```
docker stop 912902c51449
```

## login
Login into docker hub. You will be asked your docker hub credentials to log in.

```
docker login
```

## build
Build a docker image from a dockerfile. 
```
docker build . -t tagname
```
We add the dot at the end to specify the current directory. Specify a tagname to identify your image.

## push
Upload a docker image with the image name mentioned in the command on the dockerhub.

```
docker push tagname
```
