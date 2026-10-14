# 07 – One image, multiple CPU architectures

One tag can contain several variants of the same image:

| Platform | Typical machines |
|---|---|
| `linux/amd64` | Intel/AMD laptops, most servers |
| `linux/arm64` | Apple silicon Macs, Raspberry Pi, cloud ARM servers |

Docker automatically pulls the variant that matches your machine. Check what an image offers:

```bash
docker buildx imagetools inspect nginx:1.28-alpine
```

Wrong variant? You'll see `exec format error` or a *platform does not match* warning.
Emulation works, but is slow.

## Build and push for both architectures at once

Use the nginx example from `03-nginx` (replace `user` with your Docker Hub username):

```bash
cd ../03-nginx
docker buildx build --platform linux/amd64,linux/arm64 -t user/myweb:0.1 --push .
```
