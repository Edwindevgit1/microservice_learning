import type { Request, Response } from "express"
import { AuthService } from "../services/auth.service.js"
import { LoginRequestDTO } from "../dtos/login.dto.js"



export class AuthController {
  constructor(private _authService: AuthService) { }
  login = async (req: Request, res: Response): Promise<void> => {
    console.log("Login controller worked")
    const data: LoginRequestDTO = req.body;
    console.log(data)
    const result = await this._authService.login(data)
    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  }
}
