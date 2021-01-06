#!/bin/bash

set -e

docker-compose -f docker-compose.test.yml up --build -d

npm run test

