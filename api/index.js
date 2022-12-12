const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8000
const connectMongo = require('./config/db')
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(cors())
app.use(express.json())


const postRoutes = require('./src/routers/post.router')

connectMongo()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', postRoutes)

app.listen(port, () => {    
    console.log(`Example app listening at http://localhost:${port}`)
})