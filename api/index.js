const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8000
const connectMongo = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser')

const postRoutes = require('./src/routers/post.router')
const commentRoutes = require('./src/routers/comment.router')
const bookingRoutes = require('./src/routers/booking.router')

connectMongo()

//middleware
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

//routes
app.use('/api', postRoutes)
app.use('/api', commentRoutes)
app.use('/api', bookingRoutes)

app.listen(port, () => {    
    console.log(`Example app listening at http://localhost:${port}`)
})