# Node
 

## 9 de Enero. 
## !!! DESPLIEGUE !!!

> 1º VMWare con Debian.
>> 2 discos duros para hacer RAID1.
> 2º Instalar docker: `apt-get install docker`
>> https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04

> Crear carpeta proyecto: "Docker"
> Crear archivo "docker-compose.yml" -> nano docker-compose.yml
> Crear directorio especificado en .yml -> "app" -> mkdir app
> Crear archivo dockerfile -> nano dockerfile
> crear carpeta para guardar las dependencias de node y ficheros js.
>> server.js y package.json.


-> Docker []
    -> docker-compose.yml
    -> app []
        -> Dockerfile
        -> server []
            -> server.js
            -> package.json

> `docker compose up` -> Lo lanza y muestra log de todo lo que hace.
>> `docker compose up --build` -> Borra el anterior build y lo vuelve a lanzar
>> `docker compose up -d` -> Lo lanza sin mostrar el log.