# Lab1: Creating containers

## Lab scenario

your team is building a new website, it was decided to use Nginx as a web server, and you were tasked to deploy it using docker.

## Objectives

In this lab, you'll:

- Task 1: Create the nginx container
- Task 2: Verify the container is running
- Task 3: Verify that nginx in the container is running
- Task 4: Delete the container

## Instructions

### Task 1: Create the nginx container

To create the nginx container, open your terminal and run the following command

```sh
docker run -d --name web-server nginx
```

The `-d` flag will silently create the container and return its id

The `--name` flag will assign the specified value as a name for the container

Docker will first download requires resources and then will create the container

### Task 2: Verify the container is running

To list all running containers, run this command in your terminal

```sh
docker ps
```

A table should return a list of active containers, expect to see web-server among them with the status Up.

**Note:** *if the container is not running, use `docker ps -a` to list both running and stopped containers.*

### Task 3: Verify nginx in the container is running

The nginx container will have its own private IP address, we can use it to see if nginx is running

First, find the private IP by inspecting the container

```sh
docker inspect web-server
```

By inspecting the container, a JSON will be returned containing details about the container such as its name, creation date, status, network settings, etc.

One of JSON keys should be `IPAddress`, it represents the private IP of the container.

Using your browser, or a tool like curl, access the container by the retrieved IP address

```sh
curl 172.17.0.2
```

### Task 4: Delete the container

To delete the container, run in your terminal

```sh
docker rm web-server
```

---
Go to [Lab 2](./lab2.md)