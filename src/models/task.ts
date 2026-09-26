import mongoose from "mongoose";

const task = new mongoose.Schema({
  description: {
    type: String
  },

  title: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  },

  status: {
    type: String,
    enum: ["TODO", "IN_PROGRESS", "COMPLETED"],
    required: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    index: true
  }
});

const tasklist = mongoose.model("Task", task);

export default tasklist;