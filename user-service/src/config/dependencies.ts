import { AuthService } from "../services/auth.service.js";
import { AuthController } from "../controllers/auth.controller.js";
import { UserRepositery } from "../repositories/user.repository.js";

const userRepositery = new UserRepositery

export const authService = new AuthService(userRepositery)

export const authController = new AuthController(authService)