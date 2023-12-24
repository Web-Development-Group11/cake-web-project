import { getProduct, getProductById, getRandomProduct } from "../controllers/productController.js"
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";

const productRoutes = new Router();

productRoutes.get('/products', getProduct);

productRoutes.get('/products/', verifyToken , getRandomProduct);

productRoutes.get('/products/:id', getProductById)

export default productRoutes;