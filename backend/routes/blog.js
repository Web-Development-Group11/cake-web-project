import { getBlog, getBlogBySlug, getSuggestBlog } from "../controllers/blogController.js";
import { Router } from "express"

const blogRoutes = new Router();

blogRoutes.get('/blog', getBlog);

blogRoutes.get('/blog/suggested-blog', getSuggestBlog);

blogRoutes.get('/blog/:slug', getBlogBySlug);

export  default blogRoutes;