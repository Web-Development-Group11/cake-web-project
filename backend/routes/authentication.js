import {createNewUser, loginUser, logoutUser } from "../controllers/authenticationController.js";
import  { Router }  from "express";


const authenticationRoute = new Router();

authenticationRoute.post('/register',  createNewUser);

authenticationRoute.post('/login',  loginUser);

authenticationRoute.get('/logout', logoutUser);


export default authenticationRoute;