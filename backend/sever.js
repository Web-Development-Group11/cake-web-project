
import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import userRoute from './routes/user.js';
import bodyParser from 'body-parser';

//express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// const homeRoute = require('./routes/home');
app.get('/', (req, res) => {
    res.send('hello')
})

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
// app.use('/', homeRoute);
app.use('/', userRoute)

//listen for reqquest 
app.listen(process.env.PORT, () => {
    console.log("app are listening at http://localhost:" + process.env.PORT);
})