import "dotenv/config"
import { createServer,type Server } from "node:http";
import type { Application } from "express";
import App from "./app.js";


class ServerApp{
  private readonly PORT: number = Number(process.env.PORT)
  private readonly app:Application
  private readonly server:Server
  constructor(){
    this.app = new App().app
    this.server = createServer(this.app)
  }
  public start():void{
    this.server.listen(this.PORT,()=>{
      console.log(`Api Gateway is running on port${this.PORT}`)
    })
    process.once("SIGINT",()=>this.shutdown("SIGNINT"))
    process.once("SIGTERM",()=>this.shutdown("SIGTERM"))
  }
  private shutdown(signal:string):void{
    console.log(`${signal} received ... Closing API Gateway`)
    this.server.close((error)=>{
        if(error){
          console.log("Shutdown failed",error)
          process.exit(1)
          return;
        }
        console.log("Api Gateway stopped")
    })
  }
}
const serverApp = new ServerApp()
serverApp.start()