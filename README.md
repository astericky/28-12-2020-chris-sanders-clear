# Organizations Project

## Dependencies and System Requirements

- Mac OS 10.15, Windows 10, Linux
- Download [Docker for desktop](https://www.docker.com/products/docker-desktop)
- Install [Node Version Manager](https://github.com/nvm-sh/nvm#installing-and-updating)
  - run command `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`
  - or run command `wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash`

## Setup

- make sure Docker Desktop is running on your machine
- run command `npm i`

## Run Project

- run command `docker-compose -f docker-compose.dev.yml up --build`

## Run Tests

build and start test project

- run command `./test.sh`

run tests

- run command `npm test`


## Notes