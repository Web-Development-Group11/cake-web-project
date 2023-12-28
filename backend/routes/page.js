import { Router } from "express";
import {  searchBar } from "../controllers/pageController.js";


const pageRoute = new  Router();

// pageRoute.get('/product', pagination);

pageRoute.get('/product/searchBar', searchBar);

export default pageRoute;