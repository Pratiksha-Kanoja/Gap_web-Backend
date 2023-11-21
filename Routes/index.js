import { Router } from "express";
import productrouter from "./Products.routes.js";

const router = Router();

router.use('/products',productrouter)

export default router