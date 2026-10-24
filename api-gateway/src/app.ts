import express, { type Application } from "express"
import { createProxyMiddleware } from "http-proxy-middleware";
import { ServerResponse } from "node:http";
import { env } from "./config/env.js"

class App {
  public readonly app: Application
  constructor() {
    this.app = express()
  }
  configureRoutes():void{
    this.app.get("/health",(req,res)=>{
      res.status(200).json({
        status:"ok",
        service:"api-gateway"
      })
    })
    this.app.use("api/")
  }
}
export default App