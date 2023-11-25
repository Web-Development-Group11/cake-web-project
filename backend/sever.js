const express = require('express');
require('dotenv').config()
const cors = require('cors');

//express app
const app = express();

const homeRoute = require('./routes/home');

//middleware
app.use("/", (req, res, next) => {
    console.log(req.path, res.method);
    next();
    }
)
//middleware handleing cors policy
app.use(cors({
    origin: 'http://localhost:process.env.PORT',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

//routes 
app.use('/', homeRoute);

//listen for reqquest 
app.listen(process.env.PORT, () => {
    console.log("app are listening at http://localhost:" + process.env.PORT);
})