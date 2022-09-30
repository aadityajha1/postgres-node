const express = require('express')
const app = express()
const logger = require('morgan')
const userRoutes = require('./userRoute')

app.use(logger("dev"));
app.use(express.json());

app.use('/', userRoutes);



module.exports = app;