#!/bin/bash

set -e

docker-compose stop

docker-compose up --build --rm

WAIT_FOR_PG_ISREADY="while ! pg_isready --quiet; do sleep 1; done;"
docker-compose exec mongo bash -c "$WAIT_FOR_PG_ISREADY"

npm run test