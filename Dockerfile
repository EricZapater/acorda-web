# Usa una imatge de Node.js per construir l'aplicació
FROM node:18-alpine AS builder

# Estableix el directori de treball
WORKDIR /app

# Copia els fitxers de dependències
COPY package*.json ./

# Instal·la les dependències
RUN npm ci --only=production

# Copia el codi font
COPY . .

# Defineix la variable d'entorn com a build argument
ARG API_URL
ENV VITE_API_BASE_URL=$API_URL

# Construeix l'aplicació per producció
RUN npm run build

# Usa nginx per servir l'aplicació
FROM nginx:alpine

# Copia els fitxers construïts des de l'etapa anterior
COPY --from=builder /app/build /usr/share/nginx/html

# Copia la configuració personalitzada de nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exposa el port 80
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]