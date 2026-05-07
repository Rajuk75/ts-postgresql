import { Router } from "express";
import userController from "../controller/user.controller";

const router = Router();

// POST - Create a new user
router.post("/v1/user/create-user", userController.createUser);
router.get("/v1/user/get-all-user",userController.getAllUser);
router.get("/v1/user/:userId/get-user-details",userController.getUserById)

export default router;
