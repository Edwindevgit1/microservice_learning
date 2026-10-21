import mongoose from "mongoose";
import { Logger } from "../utils/logger.js";

export default class connectDB {
  public async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_URL as string,{
        serverSelectionTimeoutMS:30000,
        connectTimeoutMS:30000
      })
      Logger.info("MongoDB connected");
      Logger.info("Connected DB:",mongoose.connection.name);
    }catch(error){
      Logger.error("MongoDB connection failed",error)
      process.exit(1)
    }
  }
}