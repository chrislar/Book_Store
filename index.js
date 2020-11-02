//modules
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

//variables
const PORT = process.env.PORT
const dbLink=process.env.dbLink


//route variables
const bookRoute = require('./routes/bookRoute')

//database connections
mongoose.connect(dbLink, { useNewUrlParser: true, useUnifiedTopology: true }, () =>{
    app.listen(PORT, () => {
        console.log(`Database connected, Server is running ${PORT}`)
    })
    
})



//middlewares
app.use(express.json())

//routes
app.use(bookRoute)



//error pages