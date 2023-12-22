import { getProduct, getRandomProduct } from "../controllers/cardController.js";
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";

const productRoutes = new Router();

productRoutes.get('/products', getProduct);

productRoutes.get('/products/random', verifyToken , getRandomProduct);

export default productRoutes;