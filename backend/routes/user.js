import { getUser } from "../controllers/userController.js";
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";

const userRoute = new Router();

userRoute.get("/user", verifyToken, getUser);

export default userRoute;