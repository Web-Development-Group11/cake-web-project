import { getProduct, getRandomProduct } from "../controllers/cardController.js";
import { Router } from "express";

const productRouter = new Router();

productRouter.get('/products', getProduct);

productRouter.get('/products/random', getRandomProduct);

export default productRouter;