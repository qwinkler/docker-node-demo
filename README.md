# NodeJS app

This repository contains docker application for tests!

# Functionality

### Run simple web application:  
```sh
docker-compose up --build web
```

For the educational reasons, the default port inside image is `8080`

Try to connect to web server:  
```console
$ curl localhost
hello from containerized application!
```

### Run tests for web app:  
Edit docker-compose.yml file. Change command to test:   
```yml
command: test
```

Then run the container:  
```console
$ docker-compose up --build web
Starting docker-demo_web_1 ... done
Attaching to docker-demo_web_1
web_1  |
web_1  | > myapp@0.0.1 test /app
web_1  | > npm install inherits && mocha
web_1  |
web_1  | + inherits@2.0.3
web_1  | added 15 packages from 8 contributors, removed 3 packages, updated 28 packages and audited 171 packages in 2.835s
web_1  | found 0 vulnerabilities
web_1  |
web_1  |
web_1  |
web_1  |   Array
web_1  |     #indexOf()
web_1  |       ✓ should return -1 when the value is not present
web_1  |
web_1  |
web_1  |   1 passing (23ms)
web_1  |
docker-demo_web_1 exited with code 0
```

### Run this app with db:  
```sh
docker-compose -f db-compose.yml up --build
```
