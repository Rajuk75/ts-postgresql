import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {
    async createUser(req: Request, res: Response) {
        try {
            const { name, email, password } = req.body.user;

            if (!name || !email || !password) {
                throw new Error("Name, email and password are required");
            }

            const result = await userService.createUser(name, email, password);

            res.status(201).json({
                success: true,
                message: "User created successfully",
                data: result
            });
        } catch (error: any) {
            res.status(500).json({
                success: false,
                message: error.message || "Error creating user"
            });
        }
    }

    async getAllUser(req:Request,res:Response){
        try {
            const result =await userService.getAllUser();
            res.status(200).json({
            success: true,
            message: "User Fetched successfully",
            data: result
        });
        } catch (error:any) {
            res.status(500).json({
                success: false,
                message: error.message || "Error creating user"
            });
        }
    }

    async getUserById(req:Request<{ userId: string }>,res:Response){
        try {
            const {userId}=req.params
            const result =await userService.getUserById(userId);
            res.status(200).json({
            success: true,
            message: "User Fetched successfully",
            data: result
        });
        } catch (error:any) {
            res.status(500).json({
                success: false,
                message: error.message || "Error creating user"
            });
        }
    }

        async deleteUser(req:Request<{ filter: string }>,res:Response){
        try {
            const {filter}=req.body
            const result =await userService.deleteUser(filter);
            res.status(200).json({
            success: true,
            message: "User deleted successfully",
            data: result
        });
        } catch (error:any) {
            res.status(500).json({
                success: false,
                message: error.message || "Error deleting user"
            });
        }
    }
}

export default new UserController();