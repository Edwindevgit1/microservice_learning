import { User } from "../models/user.model.js";
export class UserRepositery {
    async findByEmail(email) {
        return await User.findOne({ email });
    }
}
//# sourceMappingURL=user.repository.js.map