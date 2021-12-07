# Lab 1: Creating containers

## Objectives

In this lab, you'll learn how to:

- Install docker
- Verify docker installation
- Create your first container

## Instructions

### Install docker

Several ways are available to install docker
- Using docker repository
- Using installation package
- Using convenience script (the simplest)

in your Terminal, run

```sh
curl -fsSL https://get.docker.com -o get-docker.sh
sh ./get-docker.sh
```

Once docker is installed, non-root users won't be able to use it without `sudo` command, to run Docker without root privileges create a group, add your user, then logout and login again

```sh
sudo groupadd docker
sudo usermod -aG docker $USER
```

Logout and login after running these commands

### Verify docker installation

It's possible to verify docker installation by checking the installed docker version

```sh
docker version
```

The expected output of the command should be 

```
Client: Docker Engine - Community
 Version:           20.10.11
 API version:       1.41
 Go version:        go1.16.9
 Git commit:        dea9396
 Built:             Thu Nov 18 00:37:06 2021
 OS/Arch:           linux/amd64
 Context:           default
 Experimental:      true

Server: Docker Engine - Community
 Engine:
  Version:          20.10.11
  API version:      1.41 (minimum version 1.12)
  Go version:       go1.16.9
  Git commit:       847da18
  Built:            Thu Nov 18 00:35:15 2021
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.4.12
  GitCommit:        7b11cfaabd73bb80907dd23182b9347b4245eb5d
 runc:
  Version:          1.0.2
  GitCommit:        v1.0.2-0-g52b36a2
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

### Create your first container

To get started using docker, create a hello-world container

```sh
docker run hello-world
```

Docker will create the container and will print an explanation of how it works.

---
Go to [Lab 2](./lab2.md)