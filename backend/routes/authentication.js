import {createNewUser, loginUser } from "../controllers/authenticationController.js";
import  { Router }  from "express";


const userRoute = Router();

userRoute.post('/users/register',  createNewUser);

userRoute.post('/users/login',  loginUser);

userRoute.get('/users', async (req, res) => {
  res.send('complete');
})

export default userRoute;