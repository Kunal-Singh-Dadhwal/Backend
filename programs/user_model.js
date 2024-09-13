import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  // username: String,
  // email: String,
  // isActive: Boolean
  // The above can be used but the better way is 
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  }, 
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    min: [8, "Must be of atleast 8 characters got only {VALUE} characters"],
    max: 50
  }
}, {
  timestamps : true
});

// User gets converted to users in mongodb
export const User = mongoose.model("User", userschema); 