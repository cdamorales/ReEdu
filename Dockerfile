FROM node:20.18.0-alpine AS builder
WORKDIR /app

COPY . ./

RUN chmod -R 777 /app

RUN npm install --legacy-peer-deps --force && ls -la node_modules

RUN npm run build && ls -la /app/out

FROM node:20.18.0-alpine
RUN npm install -g serve
WORKDIR /app

COPY --from=builder /app/out /app/out

EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]

