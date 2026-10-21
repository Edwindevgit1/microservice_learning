import { Logger } from "../utils/logger.js";
export class AuthService {
    userRepositery;
    constructor(userRepositery) {
        this.userRepositery = userRepositery;
    }
    async login(data) {
        console.log("Login service worked");
        const { email, password } = data;
        if (!email || !password) {
            throw new Error("Email and password is required");
        }
        const user = await this.userRepositery.findByEmail(email);
        if (!user) {
            Logger.warn("Login rejected:user not found");
            throw new Error("User not found");
        }
        console.log(user);
    }
}
//# sourceMappingURL=auth.service.js.map