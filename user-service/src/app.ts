import express, { type Application } from "express";
import cors from "cors";
import { ROUTES } from "./constants/route.js";
import authRoutes from "./routes/login.route.js";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
  }

  private middleware(): void {
    this.app.use(cors({}));
    this.app.use(express.json());
  }

  private routes(): void {
    // Health check endpoint
    this.app.get("/", (_req, res) => {
      res.send("user service is running")
    });

    // Authentication routes
    this.app.use(ROUTES.BASE.AUTH, authRoutes);
  }
}

export default App;
