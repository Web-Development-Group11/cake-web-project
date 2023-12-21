import {createNewUser, loginUser } from "../controllers/authenticationController.js";
import  { Router }  from "express";


const authenticationRoute = Router();

authenticationRoute.post('/register',  createNewUser);

authenticationRoute.post('/login',  loginUser);


export default authenticationRoute;