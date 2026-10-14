# 05 – Docker Compose: multiple containers together

`compose.yaml` describes the whole application stack in one file: a `web` service built from
`./web` and a `db` service from the official PostgreSQL image, with a named volume for its data.

```bash
docker compose up -d          # build and start everything
docker compose ps             # what is running?
docker compose logs -f web    # follow the logs of one service
# open http://localhost:8080
```

Compose creates a network for you: services reach each other by name.

```bash
docker compose exec web ping -c 2 db
```

Stop and clean up:

```bash
docker compose down           # stop and remove containers and the network
docker compose down -v        # ... and also remove the db-data volume
```

Notes:

- The command is `docker compose` (v2), not the old `docker-compose`.
- A `version:` field at the top of the file is no longer needed.
- Podman can run the same file: `podman compose up -d`.

> One machine. What if it needs to run on ten? That is where Kubernetes comes in.
