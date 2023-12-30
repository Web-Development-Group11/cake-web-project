
import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import blogRoutes from './routes/blog.js';
import productRoutes from './routes/product.js';
import cookieParser from 'cookie-parser';
import authenticationRoute from './routes/authentication.js';
import userRoute from './routes/user.js';
import pageRoute from './routes/page.js';
import cartRoute from './routes/cart.js';


//express app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


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
    origin: ['https://bong-cake.vercel.app/'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
}));

//routes 
app.use('/', authenticationRoute)
app.use('/', productRoutes)
app.use('/', blogRoutes)
app.use('/',userRoute)
app.use('/',pageRoute )
app.use('/',cartRoute)

//listen for reqquest 
app.listen(process.env.PORT, () => {
    console.log("app are listening at http://localhost:" + process.env.PORT);
})