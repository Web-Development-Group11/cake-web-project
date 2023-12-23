import { Router } from "express";
import { pagination } from "../controllers/pageController.js";


const pageRoute = Router();

pageRoute.get('/product', pagination);

export default pageRoute;