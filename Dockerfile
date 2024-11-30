FROM node:20.18.0-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

FROM node:20.18.0-alpine
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/out /app/out
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
EXPOSE 3000
CMD ["serve", "-s", "out", "-l", "3000"]
