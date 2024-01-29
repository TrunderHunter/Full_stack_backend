const express = require('express')
const path = require('path')
require('dotenv').config()

console.log(process.env)

const app = express()
const port = process.env.PORT || 8888
const localhost = process.env.HOST_NAME

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.send('Hello Hunter!')
})

app.get('/abc', (req, res) => {
  res.send('<h1>Hello jsn!</h1>')
})

app.get('/demo', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, localhost, () => {
  console.log(`Example app listening on port ${port}`)
})