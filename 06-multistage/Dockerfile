# Stage 1: build (contains all build tools)
FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: run (contains only the result)
FROM nginx:1.28-alpine
COPY --from=build /app/dist /usr/share/nginx/html
