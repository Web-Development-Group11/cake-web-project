import {Router} from "express";
import { saveGuestCart, getGuestCart, deleteCartProduct } from "../controllers/cartController.js";
import { verifyToken } from "../middleware/verifyToken.js";

const  cartRoute = new Router();

cartRoute.post('/cart' ,saveGuestCart);

cartRoute.get('/cart', getGuestCart);

cartRoute.delete('/cart/remove',deleteCartProduct);

export default cartRoute;