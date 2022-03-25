# SOLID

S - SRP - single responsability principle (principio da responsabilidade unica)
O - OCP - open-closed principle (principio aberto/fechado)
L - LSP - Liskov substitution principle (principio de substituição de liskov)
I - ISP - interface segregation principle (principio da segregação de interface)
D - DIP - dependency inversion principle (principio da inversão de dependencia)


docker -v

docker build -t rentx .

docker ps

docker run -p 3333:3333 rentx

docker exec -it name /bin/bash

docker stop CONTAINER_ID

docker rm CONTAINER_ID

docker-compose up

docker-compose up -d

docker logs name_app -f


*
docker ps -a

docker rm id ou nome


docker-compose up -d
docker-compose stop
docker-compose down
docker-compose start


docker exec rentx cat /etc/hosts

docker-compose up -d —force-recreate

npm run typeorm migration:create -- -n CreateCategories

npm run typeorm migration:run
npm run typeorm migration:revert

module
    - accounts
        - entities
            - 




