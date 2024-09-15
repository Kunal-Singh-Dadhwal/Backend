import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


export const connectDB = async () => {
  try {
    const connectioninstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    console.log(`\n MongoDB connected DB HOST:- ${connectioninstance.connection.host}`);
    
  } catch (error) {
      console.log("MongoDB connection error: ",error);
    process.exit(1);    
  }
}
