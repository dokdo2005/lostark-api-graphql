#!/bin/sh

sudo docker-compose down

sudo docker image rm lostark-api-graphql_node

sudo docker builder prune -f

sudo docker-compose up -d

echo "done"