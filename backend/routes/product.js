import { getProduct, getRandomProduct } from "../controllers/cardController.js";
import { Router } from "express";

const productRoutes = new Router();

productRoutes.get('/products', getProduct);

productRoutes.get('/products/random', getRandomProduct);

export default productRoutes;