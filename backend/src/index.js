const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const pool = require('./database')

require('dotenv').config()

// config

app.use(express.json())
app.use(cors({
    origin:[ 'http://localhost:3000', 'https://rinconnorte.savaldev.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use(morgan('dev'))



// routes
app.use('/api', require('./routes/cheese.js'))
app.use('/api', require('./routes/access.js'))


app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))