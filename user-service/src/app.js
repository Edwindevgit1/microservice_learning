import express from "express";
import cors from "cors";
import { ROUTES } from "./constants/route.js";
import authRoutes from "./routes/login.route.js";
class App {
    app;
    constructor() {
        this.app = express();
        this.middleware();
        this.routes();
    }
    middleware() {
        this.app.use(cors({}));
        this.app.use(express.json());
    }
    routes() {
        this.app.use(ROUTES.BASE.AUTH, authRoutes);
    }
}
export default App;
//# sourceMappingURL=app.js.map