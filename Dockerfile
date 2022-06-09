# de dockerhub lo que se necesita pro ejm el contenedor de node con la version 12
# descargar node
FROM node:12

# donde ira el proyecto (working directory)
# especificar le directorio de trabajo y crear la carpeta de trabajo
WORKDIR /app

# el * busca a los archivos con esa nomenclatura
# dependencias para que funcione el sistem y el ./ hace referencia al diretorio de trabajo, copiar los archivos
COPY package*.json ./
#
RUN npm install

COPY . .

CMD ["npm", "start"]
