const express = require('express')
const app = express()

const USERS = [
  {
    "id": 1,
    "email": "george.bluth@reqres.in",
    "first_name": "George",
    "last_name": "Bluth",
    "avatar": "https://reqres.in/img/faces/1-image.jpg"
  },
  {
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  },
  {
    "id": 3,
    "email": "emma.wong@reqres.in",
    "first_name": "Emma",
    "last_name": "Wong",
    "avatar": "https://reqres.in/img/faces/3-image.jpg"
  },
  {
    "id": 4,
    "email": "eve.holt@reqres.in",
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://reqres.in/img/faces/4-image.jpg"
  },
  {
    "id": 5,
    "email": "charles.morris@reqres.in",
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://reqres.in/img/faces/5-image.jpg"
  },
  {
    "id": 6,
    "email": "tracey.ramos@reqres.in",
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://reqres.in/img/faces/6-image.jpg"
  }
]

app.get('/', (req, res) => {
  res.send('Welcome to my website!')
})

app.get('/users', (req, res) => {
  res.status(200).json(USERS)
})

app.get('/users/even', (req, res) => {
  res.status(200).json(USERS.filter(user => user.id % 2 == 0))
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/html/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/html/contact.html')
})

app.get('/download-instructions', (req, res) => {
  res.download(__dirname + '/dummy.pdf')
})

app.get('/download-video', (req, res) => {
  res.download(__dirname + '/test.mp4')
})

app.listen(3000, () => {
  console.log(`Server is running :)`)
})


/*
  # Simple server using Node.js
  const { createServer } = require('node:http');

  const server = createServer((req, res) => {
    res.end('Finally, we are learning BE development!');
  });

  server.listen(3000, () => {
    console.log(`Server is running :)`);
  });

  # Express.js: Framework for Node.js
    - Other: Fastify.js, Hapi.js, etc

  # Steps:
    - npm init -y: Initialize a node repository
    - npm install express: Install Express.js (other dependencies)
    - git init, .gitignore

  # Response Methods:
    - send: generic - send strings, json data, etc
    - json: send JSON data
    - sendFile: HTML page
    - download: Download any file

  # HTTP Methods: (Future: REST API)
    - GET
    - POST
    - PUT
    - DELETE

  # Status Code:
    - 200: Successful/OK
    - 404: Not Found
    - 500: Server Error
*/