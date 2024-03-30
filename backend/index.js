require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose')
const URI = process.env.MONGODB_URI;

const router = require('./router/router.js')

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(router)
app.use(express.json());

const port = process.env.PORT;
app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})

mongoose.connect(URI)
.then(()=> {
    console.log('Database connected successfully')
})
.catch((err)=> {
    console.log(err)
})