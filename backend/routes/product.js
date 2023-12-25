import { getProducts, getProductById, getRandomProduct } from "../controllers/productController.js"
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { createComment, getComments } from "../controllers/commentController.js";

const productRoutes = new Router();

productRoutes.get('/products', getProducts);

productRoutes.get('/products/random', verifyToken , getRandomProduct);

productRoutes.get('/products/:id', getProductById)

productRoutes.post('/products/comment/:id',createComment )

productRoutes.get('/products/comment/:id', getComments)

export default productRoutes;