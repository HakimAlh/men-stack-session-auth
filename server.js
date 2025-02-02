// require('dotenv').config()
const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const app = express()

const mongoose = require('mongoose')
const methodOverride = require('method-override')
const morgan = require('morgan')

const port = process.env.PORT ? process.env.PORT : '3000'

//Creates a connection to MONGO database
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}`)
})


//CONTROLLERS
const pagesCtrl = require('./controllers/pages')


//ROUTE HANDLERS
app.get('/', pagesCtrl.home)


app.listen(port, () => {
    console.log(`The express app is ready on port ${port}`)
})