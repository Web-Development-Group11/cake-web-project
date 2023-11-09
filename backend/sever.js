const express = require('express');
require('dotenv').config()

//express app
const app = express();
const homeRoute = require('./routes/home');

//middleware
app.use("/", (req, res, next) => {
    console.log(req.path, res.method);
    next();
    }
)

//routes 
app.use('/',homeRoute);

//listen for reqquest 
app.listen(process.env.PORT, () => {
    console.log("app are listening at http://localhost:" + process.env.PORT);
})