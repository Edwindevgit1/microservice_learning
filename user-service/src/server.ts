import "dotenv/config"
import { createServer, type Server } from "node:http";
import type { Application } from "express";
import App from "./app.js";
import connectDB from "./config/db.js";

class ServerApp {
  private PORT: number = Number(process.env.PORT)
  private app: Application;
  private server: Server;
  private _db: connectDB;
  constructor() {
    this.app = new App().app;
    this.server = createServer(this.app)
    this._db = new connectDB()
  }
  public async start(){
    await this._db.connect()
    this.server.listen(this.PORT, () => {
      console.log(`Server is running on ${this.PORT}`)
    })
  }
}
const serverApp = new ServerApp()
serverApp.start()
