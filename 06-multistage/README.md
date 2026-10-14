# 06 – Multi-stage builds

Stage 1 uses the `node` image (with all build tools) to build the site.
Stage 2 starts again from a small `nginx` image and only copies the result.

```bash
docker build -t multistage-demo .
docker run -d -p 8080:80 multistage-demo
# open http://localhost:8080
```

Compare the sizes:

```bash
docker images node:22-alpine
docker images multistage-demo
```

The final image does not contain Node.js or `node_modules`: smaller, faster to pull,
and fewer vulnerabilities.

Layer caching: `package*.json` is copied before the rest of the source code, so the
`npm ci` layer is reused as long as your dependencies don't change.
