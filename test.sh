#!/bin/bash

set -e


docker-compose -f docker-compose.test.yml up --build

# WAIT_FOR_PG_ISREADY="while ! pg_isready --quiet; do sleep 1; done;"
# docker-compose exec mongo bash -c "$WAIT_FOR_PG_ISREADY"

# For some reason this next line doesnt run.
npm run test