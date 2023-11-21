import { Router } from "express";
import { Addproduct, getallproducts } from "../Controllers/Products.controller.js";

const productrouter = Router();

productrouter.post('/add-product',Addproduct)
productrouter.get('/get-all-product',getallproducts)

export default productrouter;