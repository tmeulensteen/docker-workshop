# Docker workshop

Examples and commands for the Docker 101 workshop. The folders follow the order of the slides.

| Folder | Slide | What you do |
|---|---|---|
| [01-hello-world](01-hello-world) | Demo 1: hello-world | Your first container |
| [02-container-vs-image](02-container-vs-image) | Demo 2: where did my file go? | Container vs image, writable layer, volumes |
| [03-nginx](03-nginx) | Dockerfile, Changes and Updates | Build your own image, push only the changed layer |
| [04-volumes-networks](04-volumes-networks) | Data & networking | Ports, volumes, networks, bind mounts |
| [05-compose](05-compose) | Docker Compose | Multiple containers with one file |
| [06-multistage](06-multistage) | Multi-stage builds | Small images without build tools |
| [07-multi-arch](07-multi-arch) | One image, multiple CPU architectures | amd64 and arm64 |
| [08-security](08-security) | Security basics | Scanning and good habits |
| [extra](extra) | | httpd, Apache on Ubuntu, figlet hello world |

## Command cheat sheet

### Version and info

```bash
docker --version
docker info
```

### Images

```bash
docker pull nginx:1.28-alpine         # download an image from a registry (Docker Hub)
docker images                         # list local images
docker rmi nginx:1.28-alpine          # remove an image
docker history nginx:1.28-alpine      # show the layers of an image
```

### Run containers

```bash
docker run hello-world                       # run, print, exit
docker run -it ubuntu bash                   # interactive shell (-i input, -t terminal)
docker run -d -p 8080:80 --name web nginx    # in the background, port 8080 on your machine -> 80 in the container
docker run --rm -it ubuntu bash              # remove the container automatically when it stops
```

- `-it`: interactive with a terminal, for when you want to type in the container.
- `-d`: detached, the container runs in the background. Use `docker logs` to see its output.
- `-p host:container`: publish a port. Without `-p` you cannot reach the container from your browser.

### What is running?

```bash
docker ps                    # running containers
docker ps -a                 # all containers, including stopped ones
docker logs web              # output of a container
docker logs -f web           # follow the output
docker exec -it web sh       # open a shell in a running container (bash if the image has it)
docker diff web              # what changed in the container's writable layer
```

### Stop, start, remove containers

```bash
docker stop web              # stop the container
docker start web             # start the same container again
docker start -ai web         # ... and attach to it interactively
docker restart web           # stop + start
docker rm web                # remove a stopped container
docker rm -f web             # stop and remove in one go
docker container prune       # remove all stopped containers
```

### Build and share images

```bash
docker build -t myweb:0.1 .                  # build from the Dockerfile in this folder (the dot)
docker login                                 # log in to Docker Hub
docker tag myweb:0.1 user/myweb:0.1          # name it <dockerhub-user>/<repository>:<tag>
docker push user/myweb:0.1                   # upload to Docker Hub
```

### Volumes and networks

```bash
docker volume create data
docker run -it --rm -v data:/data ubuntu bash
docker network create app-net
docker run -d --name db --network app-net -e POSTGRES_PASSWORD=secret postgres:17
```

### Docker Compose

```bash
docker compose up -d
docker compose ps
docker compose logs -f
docker compose down
```

### Clean up everything you don't use

```bash
docker system df             # how much space do images, containers and volumes use?
docker system prune          # remove stopped containers, unused networks and dangling images
```
