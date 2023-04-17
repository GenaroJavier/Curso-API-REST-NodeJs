#Definimos la imagen del contenedor
FROM node:18.15.0

#Creamos el directorio de trabajo
WORKDIR /api

# Expone el puerto 3000
EXPOSE 3000

#Copia los archivos donde estamos pocionados y los envia al directorio de trabajo
COPY . .

RUN npm install

# Define el comando de inicio
# Y se va a ejecutar una vez que este levantado el contenedor
CMD ["npm", "start"]
