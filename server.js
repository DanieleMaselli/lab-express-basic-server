const express = require('express')
const articles = require ('./data/articles.json')
const projects = require ('./data/articles.json')
const app = express()


app.use(express.json())

app.get('/', (request, response) => {
  response.sendFile(__dirname+"/home.html")
})

app.get('/blog', (request, response) => {
  response.sendFile(__dirname+"/blog.html")
})

app.get('/api/projects', (request, response) => {
  response.json(projects)
})

app.get('/api/articles', (request, response) => {
  response.json(articles)
})

app.use((request, response) => {
  response.status(404).sendFile(__dirname+"/not-found.html")
})

app.listen(5005, () => console.log('My first app listening on port 3000!'))