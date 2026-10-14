# 03 – Your own image: nginx with your own page

## Run nginx as-is

```bash
docker run -d -p 8080:80 nginx
# open http://localhost:8080
```

`-d` runs the container in the background (detached).
`-p 8080:80` publishes port 80 of the container on port 8080 of your machine.

## Build your own image

```bash
docker build -t myweb:0.1 .
docker run -d -p 8080:80 --name myweb myweb:0.1
# open http://localhost:8080
```

What the Dockerfile does:

| Instruction | Meaning |
|---|---|
| `FROM` | start from an existing image (pin a version tag, not `latest`) |
| `LABEL` | metadata (author, version) |
| `COPY` | put your own files in the image |
| `EXPOSE` | documents the port; publishing it is done with `-p` |

There is no `CMD`: it is inherited from the nginx base image.

## Useful commands

```bash
docker ps                    # running containers
docker logs myweb            # output of the container
docker exec -it myweb sh     # open a shell inside the running container
docker stop myweb            # stop the container
docker rm myweb              # remove the container
docker rmi myweb:0.1         # remove the image
```

## Changes and updates: only the changed layer moves

Push the image to Docker Hub (replace `user` with your Docker Hub username):

```bash
docker login
docker tag myweb:0.1 user/myweb:0.1
docker push user/myweb:0.1
```

Now change the text in `index.html` to `Version 0.2`, then:

```bash
docker build -t user/myweb:0.2 .
docker push user/myweb:0.2
```

Look at the output: every layer says `Layer already exists`, except the `COPY` layer, which is `Pushed`.
On another machine, `docker pull user/myweb:0.2` only downloads that one layer as well.
