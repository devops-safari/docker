# Lab 5: Networking

## Objectives

In this lab, you'll learn how to:

- Access the container by its private IP
- Expose ports from the container to the host
- Cross-container communication

## Instructions

### Access the container by its private IP

Containers in docker use bridge network provisioned by docker, each container has its own private IP address, use `inspect` command to retrieve the container network settings

```sh
docker inspect node-app
```

The expected output is a JSON payload containing details about the `node-app` container, it should contain a section for Network Settings that contain

```
"Networks": {
    "bridge": {
        "IPAddress": "172.17.0.5"
    }
}
```

The node app created in [Lab 4](./lab4.md) is running on port 3000, using a tool like curl we can see that it returns `Hello world!`

```
curl 172.17.0.5:3000
```

### Expose ports from the container to the host

Docker host machines can share ports with the containers, the goal is to expose a container port to the network of the host machine

```
docker run -d -p 80:3000 node-app
```

This command wil create another container of node-app, and its port 3000 will be exposed to the port 80 in the host machine.

That means when we access localhost or 172.0.0.1, it should return `Hello world!`

```sh
curl localhost
```

***Note:** A container won't be created if the host machine port is already in use.*

### Cross-container communication

Todo

---
Go to [Lab 6](./lab6.md)