# 08 – Security basics

- **Trusted base images**: use official images and pin a tag (`nginx:1.28-alpine`, not `latest`).
- **Small images**: fewer packages means fewer vulnerabilities (alpine, distroless, Docker Hardened Images).
- **Don't run as root**: add a `USER` to your Dockerfile.
- **No secrets in images**: every layer can be read back, so never put passwords in a Dockerfile.
- **Scan your images**: Docker Scout, Trivy.
- **Rebuild regularly**: a new base image means new security patches.

## Scan an image

```bash
docker scout quickview nginx:latest
docker scout quickview nginx:1.28-alpine
```

Or with Trivy (no installation needed, it runs as a container):

```bash
docker run --rm aquasec/trivy image nginx:1.28-alpine
```

Compare the number of vulnerabilities between `nginx:latest` and `nginx:1.28-alpine`.

## Proof: every layer can be read back

```bash
docker history --no-trunc nginx:1.28-alpine
```

Everything you put in a `RUN`, `ENV` or `ARG` line is visible here.
