FROM node:20.18.0-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 3000
RUN npm run build
CMD ["npm", "start"]