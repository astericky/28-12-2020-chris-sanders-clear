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

- run command `./scripts/dev.sh`

## Test Project

build and start test project

- run command `./scripts/test.sh`


## Deploy Project

git push heroku main


## How to use API

- to get all organizations `http://localhost:3000/organizations`
- to search text use `http://localhost:3000/organizations?text=Apple`
- to search number of employees use `http://localhost:3000/organizations?numberOfEmployees=10000`
- to search dates use `http://localhost:3000/organizations?date=2020-10-30`

## Notes
