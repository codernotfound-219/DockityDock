`docker pull redis`: 
- Pulls the image 'redis' (latest - default) from dockerhub (default)

`docker images`:
- Lists all the images on local machine

`docker run redis`:
- creates the environment (container) for redis.
- opens the interface in attached mode

`docker ps`:
- lists running containers
	`docker ps -a`: lists all running and stopped containers

`docker run -d redis`:
- creates the container for redis in detached mode (no interface).
- returns the id of the container.
	`docker start 'id'`: starts the container, for the image (unique id)    // works on existing containers
	`docker stop 'id'`: stops the container, for the image (unique id)        // works on existing containers
- `docker run`: to create a new container
- `docker start`: to restart a stopped container

`docker run redis:4.0`:
- pulls the image from dockerhub (v-4.0) and runs the container.
- you can use two versions of redis on the same machine via distinct containers.
- multiple containers are accessed via unique ports.

`docker run -p6000:6379 redis`:
- host's port of 6000 is binded to container's port of 6379, and redis container is .

`docker run -d -p6001:6379 --name redis-older redis:5.0`:
- run redis (v5.0) in detached mode with a given name 'redis-older'

`docker network ls`:
- lists all available docker networks

`docker network create <network name>`:
- create a docker network with the given network name.

