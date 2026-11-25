import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/Product.js'
import bcrypt from 'bcrypt'




mongoose.connect(MONGO_URI)
.then(() =>{
    console.log('Mongoose is running')
})
.catch((error) =>{
    console.error("Connection error", error)
})

const app = express()
const port = 3000
app.use(express.json())
app.use('/', route)

app.listen(port, () => {
    console.log('server is running on port: ' + port)
})
