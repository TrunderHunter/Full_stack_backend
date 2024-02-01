require('dotenv').config()
const express = require('express')
const configViewEngine = require('./config/viewEngine')
const webRouter = require('./routes/web')
const connection = require('./config/database')

const app = express()
const port = process.env.PORT || 8888
const localhost = process.env.HOST_NAME

// config rep.body
app.use(express.json()); //utilizes the body-parser package
app.use(express.urlencoded({ extended: true }));
// Khai bao route
app.use('/', webRouter)

// config template engine
configViewEngine(app);



app.listen(port, localhost, () => {
  console.log(`Example app listening on port ${port}`)
})

