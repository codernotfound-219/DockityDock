### Application Source: dev/

Upon pulling mongo and mongo-express for deploying a backend to the node project.
```zsh
docker run -d \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--name mongodb \
--network mongo-network \
mongo
```
- -e: environment flag (set username and password before initialization. [needed for mongo-express])
- --network: specify which isolated docker network it should belong to.