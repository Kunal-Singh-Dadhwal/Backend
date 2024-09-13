import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true});

export const subtodo = mongoose.model("Subtodo", subtodo);
