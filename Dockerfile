# Build stage
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration=production

# Production stage
FROM nginx:alpine
# O / no final da origem (browser/) indica que você quer copiar o conteúdo interno da pasta.
COPY --from=build /app/dist/frontend-creditos/browser/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]