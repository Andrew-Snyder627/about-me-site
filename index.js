const express = require('express')
const path = require('path')
const fs = require('fs')

const hobbies = require('./data/hobbies.json')
const goals = require('./data/goals.json')
const milestones = require('./data/milestones.json')

const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  const recentMilestones = [...milestones]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3)


  res.render('index', {
    name: "Andrew",
    title: "About Me - Node Site",
    hobbies,
    goals,
    recentMilestones
  })
})

app.get('/about', (req, res) => {
  res.render('about', {
    name: "Andrew",
    title: "About Me"
  })
})

app.get('/hobbies', (req, res) => {
  res.render('hobbies', {
    title: "My Hobbies",
    hobbies
  })
})

app.get('/projects', (req, res) => {
  const filePath = path.resolve(__dirname, 'projects.json')


  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(500).send('Could not load projects.')
    }
    const projects = JSON.parse(data)
    res.render('projects', { projects })
  })
})

app.get('/timeline', (req, res) => {
  const filteredType = req.query.type 
  let filteredMilestones = milestones

  if (filteredType) {
    filteredMilestones = milestones.filter((milestone) => {
      return milestone.type === filteredType
    })
  }

  filteredMilestones.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })

  res.render('timeline', {
    title: "My Timeline",
    milestones: filteredMilestones,
    filter: filteredType
  })
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})

