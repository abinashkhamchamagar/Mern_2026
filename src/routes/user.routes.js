import express from "express";
import userControllers from "../controllers/user.controllers.js";

const router = express.Router();


router.get("/users", userControllers.getUsers)
router.get("/users/:userId", userControllers.getUserById)


export default router; 