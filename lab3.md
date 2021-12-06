# Lab3: Creating non-ephemeral containers

## Lab scenario

After building a static website, your team decided to build a blog using WordPress, you were tasked to deploy it using Docker.

## Objectives

In this lab, you'll:

- Task 1: Creating MySQL container
- Task 2: Creating WordPress container

## Instructions

### Task 1: Creating MySQL container

As WordPress requires a database, a MySQL container must be created.

```sh
docker run \
  -d \
  --name blog-db
  -e MYSQL_ROOT_PASSWORD=gHXp8Hqr \
  -e MYSQL_DATABASE=wp \
  -v ./db-data:/var/lib/mysql \
  mysql:5.7
```

MySQL container requires a password to be specified for root user through `MYSQL_ROOT_PASSWORD` environment variable

Also creating an empty database is required by WordPress using `MYSQL_ROOT_PASSWORD` variable

The `-e` flag is used to passing values to environment variables

Since containers are by default ephemeral, it's important to persist database data by mounting a volume using the `-v` flag

### Task 2: Creating WordPress container

WordPress container should also be stateful in order to maintain blog data (like images)

It's also important to pass database connection details (hostname, user, password and database name)

```sh
docker run \
  -d \
  --name blog-wp \
  -e WORDPRESS_DB_HOST=blog-db \
  -e WORDPRESS_DB_USER=root \
  -e WORDPRESS_DB_PASSWORD=gHXp8Hqr \
  -e WORDPRESS_DB_NAME=wp \
  -v ./wp-data:/var/www/html
  -p 80:80
  wordpress
```

The `-p` flag is used to expose a port from the container to the host machine, on left the host machine port to be exposed, on the right the listening port in the container
