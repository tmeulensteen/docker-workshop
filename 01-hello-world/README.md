# 01 – Hello world

Your first container: Docker pulls an image, creates a container, runs it and the container stops again.

```bash
docker run hello-world
```

Read the output: it explains the four steps itself.

1. The Docker client contacts the Docker daemon.
2. The daemon pulls the `hello-world` image from Docker Hub.
3. The daemon creates a new container from that image and runs it.
4. The output is streamed to your terminal, then the container exits.

Now look around:

```bash
docker ps        # empty: the container is no longer running
docker ps -a     # there it is, with status "Exited (0)"
docker images    # the image is now stored locally
```

Run `docker run hello-world` again: no download this time, the image is already local.

> A container lives as long as its main process.
