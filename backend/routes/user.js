import { getUser, updateUsers } from "../controllers/userController.js";
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";

const userRoute = new Router();

userRoute.get("/user", verifyToken, getUser);

userRoute.patch("/user", verifyToken, updateUsers);

export default userRoute;