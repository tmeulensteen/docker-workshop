# 04 – Data & networking

Containers are disposable: `docker rm` deletes everything written inside the container.

## Ports

```bash
docker run -d -p 8080:80 nginx      # -p host:container
```

## Volumes: data that survives the container

```bash
docker volume create db-data
docker volume ls
```

## Networks: containers find each other by name

```bash
docker network create app-net

docker run -d --name db --network app-net \
    -e POSTGRES_PASSWORD=secret \
    -v db-data:/var/lib/postgresql/data \
    postgres:17

# a second container on the same network reaches the database as "db"
docker run -it --rm --network app-net postgres:17 \
    psql -h db -U postgres -c "select version();"
# password: secret
```

## Prove that the data survives

```bash
docker rm -f db
docker run -d --name db --network app-net \
    -e POSTGRES_PASSWORD=secret \
    -v db-data:/var/lib/postgresql/data \
    postgres:17
# the database files are still in the db-data volume
```

## Bind mounts: share a folder from your laptop (handy during development)

```bash
docker run -d -p 8080:80 -v "$(pwd)/../03-nginx:/usr/share/nginx/html:ro" nginx
# change index.html on your laptop and refresh the browser
```

## Clean up

```bash
docker rm -f db
docker network rm app-net
docker volume rm db-data
```
