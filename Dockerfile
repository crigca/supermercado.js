# Usar la imagen base de Nginx
FROM nginx:alpine

# Eliminar los archivos predeterminados de Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar los archivos estáticos del sitio web al contenedor
COPY html /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx y asegurarse de que no se ejecute en segundo plano
CMD ["nginx", "-g", "daemon off;"]
