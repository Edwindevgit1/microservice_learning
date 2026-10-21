import { LoginRequestDTO } from "../dtos/login.dto.js";
import { IAuthService } from "../interfaces/service/auth/IAuthService.js";
import { UserRepositery } from "../repositories/user.repository.js";
import { Logger } from "../utils/logger.js";

export class AuthService implements IAuthService {
  constructor(
    private userRepositery:UserRepositery
  ){}
  async login(data: LoginRequestDTO): Promise<void> {
    console.log("Login service worked")

    const { email, password } = data

    if (!email || !password) {
      throw new Error("Email and password is required")
    }
    const user = await this.userRepositery.findByEmail(email)
    if(!user){
      Logger.warn("Login rejected:user not found")
      throw new Error("User not found")
    }
    console.log(user)
  }
}