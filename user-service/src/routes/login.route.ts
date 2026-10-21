import { Router } from "express";
import { ROUTES } from "../constants/route.js";
import { authController } from "../config/dependencies.js";

const router = Router()

router.post(ROUTES.AUTH.LOGIN,authController.login.bind(authController))

export default router