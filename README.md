# Para poder ejecutar el servidor

Antes de iniciar, se debe modificar el archivo src/config y modificar los siguientes parametros: 
port: el puerto que utilizara el servidor
db.host: el nombre de l host de la base de datos
db.port: el puerto que utilizara la db
db.user: el nombre de usuario de la db
db.password: la contraseña de la db
db.database: el nombre de la base de datos

## Creacion de la base de datos

Para crear la base de datos utilizada por el servidor, se puede utilizar el query ubicado en models/dbsql.sql

## Descargar dependencias

Se debe utilizar el comando npm install en la consola en el directorio del proyecto

## Ejecutar el servidor

Existen 3 comandos

build: Para compilar el proyecto en javascript en la carpeta /build

init: Para ejecutar el servidor una vez haya sido compilado

Start: Para compilar y posteriormente ejecutar el servidor 