import {Router} from "express";
import { saveGuestCart, getGuestCart } from "../controllers/cartController.js";

const  cartRoute = new Router();

cartRoute.post('/cart',saveGuestCart);

cartRoute.get('/cart', getGuestCart);

export default cartRoute;