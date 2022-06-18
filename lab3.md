# Lab 3: Image lifecycle

## Objectives

In this lab, you'll learn about:

- Public and private registries
- Managing images

## Instructions

### Use public and private registries

Docker hub is a library of container images, we call it also a registry, since pulling images doesn't require an account, it's a Public registry

Many companies use private images, so they host them in private registries.

To connect to Docker Hub registry use `login` command

```sh
docker login
```

When connecting to a private registry, specify the URL

```sh
docker login registry.company.com
```

The `login` command will interactively ask for a username and password

Username and password can also be passed in login command using `-u` and `-p` flags

```sh
docker login -u [username] -p [password]
```

### Managing images

Images can be pulled from a registry, and also can be hosted in a registry

To pull an image use the `pull` command

```sh
docker pull mysql:5.7
```

The image name is `mysql`, the leading `5.7` is called a tag, with it we specify the desired version of MySQL image to pull

To view the list of pulled images use `images` command, it will display a list of images with their repository name, tag, ID, creation date, and size

```sh
docker images
```

When a tag is not specified when pulling an image, docker will pull the `latest` tag, that usually represents the latest version of the image.

Images can be deleted using `rmi` command, but must not be used by containers

```sh
docker rmi busybox
```

Images can be renamed using `tag` command

```sh
docker tag nginx web-server
docker images
```

A new image with name `web-server` will be created, will share the same ID of `nginx` image

When hosting an image in Docker Hub registry, its name start with the user account, and will be hosted using `push` command

A repository in Docker Hub website must be created before pushing the image

```sh
docker tag nginx [username]/nginx
docker push [username]/nginx
```

---

Go to [Lab 4](./lab4.md)
