# Lab 4: Building images

## Objectives

In this lab, you'll learn how to:

- Build your own image

## Instructions

### Build your own image

First, Download [Lab 4 assets](https://github.com/devops-safari/docker) from labs repository

The `assets/lab4` directory should contain the following files

- `index.js` a server-side app written in Node.js
- `package.json` a Node.js packages file containing project dependencies
- `Dockerfile` the file used to build the image
- `.dockerignore` a file used when building the image
- `readme.md` an extra file

Edit `Dockerfile` and add the following instructions

```
FROM node:8
COPY . /app
WORKDIR /app
RUN npm install
CMD ["node", "index.js"]
```

The `FROM` instruction used to specify a base image, this project is written in Node.js so we used `node:8` image, we've two options

- Use any os-based image (like Ubuntu, Debian, etc) and install node.js manually on top of it
- Use an image that comes already with node installed

The `COPY` instruction will copy files from current working directory represented by `.` to `/app` directory inside the image

If the `/app` doesn't exist, Docker will create it

The `WORKDIR` instruction will set the current working directory of the image

The `RUN` instruction will execute a command inside the image, `npm install` is used to install node dependencies from `package.json` file

The `CMD` instruction will specify the startup command of the image when it gets created.

To build the image use the `build` command

```sh
docker build -t node-app -f Dockerfile
```

The build command will first pull the `node:8` image, will run the instructions in `Dockerfile` as steps, a tag name was specified using `-t` flag and a Dockerfile name was specified using the `-f` flag

Each step represents a set of changes made to the image, each step is considered a layer of the image, so one image can be one or multiple layers.

To create the container from the newly built image

```sh
docker run -d --name node-app node-app
```

The `package.json` and `index.js` files are by the `COPY` instruction in `Dockerfile` but `readme.md` was ignore because it was mentioned in `.dockerignore` file

Check the files inside the container by executing `ls` command

```sh
docker exec node-app ls
```

---
Go to [Exercice 2](./exercice2.md)