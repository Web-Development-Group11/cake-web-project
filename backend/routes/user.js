import createNewUser from "../controllers/userController.js";
import  { Router }  from "express";


const userRoute = Router();

userRoute.post('/users',  createNewUser);

userRoute.get('/users', async (req, res) => {
  res.send('complete');
})

export default userRoute;