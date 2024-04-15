require('dotenv').config()
require("express-async-errors")
const express = require('express')
const blogRouter = require('./routes/blogs')
const userRouter = require('./routes/users')
const loginRouter = require('./routes/login')
// const commentRouter = require('./routes/comment')

const middleWare = require('./utils/middleware')
const cors = require('cors')
const app = express() 
app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

app.use(middleWare.requestLogger)
app.use(middleWare.tokenExtractor)

app.use('/api/blogs', blogRouter)
app.use('/api/users',  userRouter)
app.use('/api/login', loginRouter )

if(process.env.NODE_ENV === 'test'){
    const testingRouter = require('./routes/testing')
    app.use('/api/testing', testingRouter)
}
app.use(middleWare.unknownEndpoint)
app.use(middleWare.errorHandler)
module.exports = app

