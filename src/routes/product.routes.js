import express from "express";
import productController from "../controllers/product.controller.js";


const router = express.Router();

router.post("/", productController.createProduct);
router.get("/", productController.getProducts);


export default router;

