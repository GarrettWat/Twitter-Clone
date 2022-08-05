const express = require('express')
const app = express()
const port = 3000
const path = require('path')

//  Setting templaters
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
	res.render('pages/home')
})

app.get('/login', (req, res) => {
    res.render('pages/login', {rangers:rangers})
  })

app.get('/profile', (req, res) => {
    res.render('pages/profile', {rangers:rangers})
  })

app.get('/register', (req, res) => {
    res.render('pages/register', {rangers:rangers})
  })

  app.get('/user', (req, res) => {
    res.render('pages/user', {rangers:rangers})
  })




  app.use(express.static(path.join(__dirname, 'public')))