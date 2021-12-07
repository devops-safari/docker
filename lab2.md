# Lab 2: Container lifecycle

## Objectives

In this lab, you'll learn how to:

- Pull images and create containers
- Manage containers
- Run containers with custom startup command

## Instructions

### Pull images and create containers

[Docker hub](https://hub.docker.com/) is a library of container images, when we create a container, the desired image will be pulled automatically, otherwise, it could also be just pulled manually

```sh
docker pull busybox
```

When creating a container, a name can be specified using `--name` flag, otherwise docker will generate a random name

```sh
docker run --name web-server nginx
```

When running this command, docker will pull `nginx` image, will create it, and the console output will keep displaying the container logs.

`Ctrl+C` will stop displaying container logs, and will stop the container as well

It's possible to create the container and keep it working in the background without attaching its logs to the console by using `-d` flag.

```sh
docker run -d nginx
```

This command will output the container ID, to display all active containers use `docker ps`, to display both active and stopped containers add the `-a` flag.

```sh
docker ps -a
```

A table will be output to console containing list of containers with their IDs, image name, creation date, status and names.

### Manage containers

As containers can remain working in background, they're like linux services, can get started, stopped or restarted

```sh
docker stop web-server
docker start web-server
docker restart web-server
```

To view container logs use `logs` command

```sh
docker logs web-server
```

It's also possible to delete containers, but they have to be stopped first

```sh
docker rm web-server
```

To force removal of a running container, you may use the `-f` flag

```sh
docker rm -f web-server
```

It's also possible to automate removal of container once its exited by adding `rm` flag during its creation

```sh
docker run -d --rm --name web-server nginx
docker ps
docker stop web-server
docker ps -a
```

### Run containers with custom startup command

When creating a busybox container, it'll be exited automatically

```sh
docker run -d --name sandbox busybox
docker ps -a
```

This is because there was no default startup instruction given to the container, unlike nginx containers, they start running nginx server on startup automatically.

Custom startup commands can be set after specifying the container name

```sh
docker run busybox /bin/sh -c 'while true; do echo $(date); sleep 1; done;'
```

This endless command will keep printing the current date every 1 second, this shell command is executed inside the busybox container.

It's also possible to execute extra commands on running containers using `exec` command

```sh
docker run -d --name sandbox2 busybox /bin/sh -c 'while true; do echo $(date); sleep 1; done;'
docker exec sandbox2 echo Hello
```

This command will output Hello text using echo tool that exist inside the busybox container, to run interactive terminal commands, use `-it` flag

```sh
docker exec -it sandbox2 vi
```

---
Go to [Exercice 1](./exercice1.md)