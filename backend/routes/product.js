import { getProducts, getProductById, getRandomProduct, getHighlitedProduct } from "../controllers/productController.js"
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { createComment, getComments } from "../controllers/commentController.js";

const productRoutes = new Router();

productRoutes.get('/product', getProducts);

productRoutes.get('/product/random', verifyToken , getRandomProduct);

productRoutes.get('/product/:id', getProductById)

productRoutes.post('/product/comment/:id',createComment )

productRoutes.get('/product/comment/:id', getComments)

productRoutes.post('/highlight', getHighlitedProduct)

export default productRoutes;