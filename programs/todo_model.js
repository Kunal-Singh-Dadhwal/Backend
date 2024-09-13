import mongoose from "mongoose";

const todoschema = new mongoose.Schema({
  content: {
    type: String,
    required: true,

  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }, subtodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subtodo"
    }
  ]
}, {
  timestamps: true,
});

export const Todo = mongoose.model("Todo", todoschema);