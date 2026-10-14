# Extra examples

These examples share the website template in `site/`. Build them from this `extra` folder.

## Official httpd image

```bash
docker build -f httpd/Dockerfile -t mysite-httpd .
docker run -d -p 8081:80 mysite-httpd
# open http://localhost:8081
```

## Apache built from scratch on Ubuntu

The "hard way": compare this Dockerfile with the two-line `httpd` one above.

```bash
docker build -f apache/Dockerfile -t mysite-apache .
docker run -d -p 8082:80 mysite-apache
# open http://localhost:8082
```

## Hello world with figlet

```bash
docker build -t figlet-hello figlet-hello
docker run --rm figlet-hello
```
