import { IUser,User } from "../models/user.model.js"
import { IUserRepository } from "../interfaces/repository/IUserRepository.js"


export class UserRepositery implements IUserRepository{
async findByEmail(email: string): Promise<IUser | null> {
  return await User.findOne({email})
}
} 