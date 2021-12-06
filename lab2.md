# Lab2: Building container images

## Lab scenario

Your team finished writing code for the website, you were tasked to build a custom nginx container that contain the website code.

## Objectives

In this lab, you'll:

- Task 1: Write a Dockerfile
- Task 2: Build an image
- Task 3: Build a container using the built image

## Instructions

### Task 1: Write a Dockerfile

First, make sure to download the lab files from [here](https://github.com/devops-safari/docker)


Then, copy lab2 files from assets folder into your workspace and create a file with the name `Dockerfile`

Finally, copy the following content into your Dockerfile

```dockerfile
FROM nginx
COPY . /usr/share/nginx/html
```

### Task 2: Build an image

To build an image, run in your Terminal

```sh
docker build -t website .
```

The `-t` flag is used to specify a tag for the image, a tag is usually a combination of image name and its version

### Task 3: Build a container using the built image

Like in [Lab 1](./lab1.md), to create a container, run in your Terminal

```sh
docker run -d website
```

---
Go to [Lab 3](./lab3.md)