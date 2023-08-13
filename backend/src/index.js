const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

require('dotenv').config()

// config

app.use(express.json())
app.use(cors({
    origin:[ 'http://localhost:3000', 'https://rinconNorte.savaldev.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.use(morgan('dev'))




app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))