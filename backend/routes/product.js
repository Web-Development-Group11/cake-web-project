import { getProduct } from "../controllers/cardController.js";
import { Router } from "express";

const productRouter = new Router();

productRouter.get('/products', getProduct);

export default productRouter;