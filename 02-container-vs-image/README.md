# 02 – Where did my file go? (container vs image)

## 1. Run Ubuntu and write a file

```bash
docker run -it --name demo ubuntu bash
```

Inside the container:

```bash
cat /etc/os-release           # Ubuntu, whatever your laptop runs
echo $$                       # 1: bash is PID 1 inside the container
hostname                      # the container ID
echo hallo > /tmp/test.txt
exit
```

Tip: `ps` and `vim` are not in the image. Images contain only the bare minimum.

## 2. Start the same container again: the file is still there

```bash
docker start -ai demo
cat /tmp/test.txt             # hallo
exit
docker diff demo              # shows exactly what changed in the container's writable layer
```

## 3. New container from the same image: the file is gone

```bash
docker run -it ubuntu bash
cat /tmp/test.txt             # No such file or directory
exit
docker ps -a                  # two containers, one image
```

## 4. With a volume, data survives

```bash
docker rm demo
docker run -it --rm -v data:/data ubuntu bash
echo "survives" > /data/test.txt
exit
docker run -it --rm -v data:/data ubuntu bash
cat /data/test.txt            # survives
exit
```

`--rm` removes the container as soon as it stops.

> An image is the template and never changes. Every `docker run` creates a new container
> with an empty writable layer. Data that must survive belongs in a volume.
