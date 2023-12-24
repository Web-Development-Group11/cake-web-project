import {Router} from "express";
import { saveGuestCart } from "../controllers/cartController.js";

const  cartRoute = new Router();

cartRoute.post('/cart',saveGuestCart);

export default cartRoute;