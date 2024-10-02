import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
import dotenv from "dotenv";
import { v2 as cloudinary } from 'cloudinary';

dotenv.config({
  path: '../.env'
});
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUDNAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINAY_API_SECRET
});


const uploadoncloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    
    cloudinary.uploader.upload
  } catch (error) {
    
  }
}