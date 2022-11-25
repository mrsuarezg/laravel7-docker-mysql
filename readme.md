# Laravel7Docker - Laravel Initial Base

This is a Laravel base application ready for deploy with Docker and MySQL.

## Comenzando 🚀

Clone or download this repository, remember can use git clone o wget.

```
    git clone https://github.com/mrsuarezg/laravel7-docker-mysql.git
        OR
    wget https://github.com/mrsuarezg/laravel7-docker-mysql.git
```

### Pre-requisitos 📋

- Docker

```
https://www.docker.com/
```

### Instalación 🔧

_we will make a copy of the .env.example file that Laravel includes by default and name the copy .env, which is the file Laravel expects to define its environment_

```
    cp .env.example .env
````

_With all of your services defined in your docker-compose file, you just need to issue a single command to start all of the containers, create the volumes, and set up and connect the networks:_

```
    docker-compose build app
    docker-compose up -d
    docker-compose exec app composer install
    docker-compose exec app php artisan key:generate
```

_Commands_

```
    docker-compose logs nginx

    docker-compose pause

    docker-compose unpause

    docker-compose down
```

_For the access use_

```
    http://localhost:8080
```