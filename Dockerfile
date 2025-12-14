# ETAPA 1: Construcción (El "Chef" que cocina el código)
# Usamos una imagen ligera de Node.js v20 (Alpine es una versión mini de Linux)
FROM node:20-alpine as builder

# Creamos una carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero los archivos de dependencias (package.json)
# Hacemos esto antes de copiar todo el código para aprovechar la memoria caché de Docker
COPY package*.json ./

# Instalamos las dependencias (npm ci es más rápido y estricto que npm install)
RUN npm ci

# Ahora sí, copiamos todo el resto de tu código al contenedor
COPY . .

# Compilamos la aplicación para producción (crea la carpeta dist/)
RUN npm run build

# ETAPA 2: Servidor (El "Mesero" que entrega el plato)
# Usamos Nginx, un servidor web super rápido y ligero
FROM nginx:alpine

# Copiamos lo que "cocinó" la etapa 1 (los archivos de la carpeta dist) a la carpeta pública de Nginx
# NOTA: En Angular 17, la ruta suele ser dist/nombre-proyecto/browser
COPY --from=builder /app/dist/mi-portafolio/browser /usr/share/nginx/html

# Copiamos nuestra propia configuración de servidor (que haremos en el siguiente paso)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Abrimos el puerto 80 del contenedor
EXPOSE 80

# Comando para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]