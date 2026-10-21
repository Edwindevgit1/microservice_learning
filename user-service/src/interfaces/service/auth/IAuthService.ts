import type { LoginRequestDTO } from "../../../dtos/login.dto.js"

export interface IAuthService{
  login(data:LoginRequestDTO):Promise<void>
}