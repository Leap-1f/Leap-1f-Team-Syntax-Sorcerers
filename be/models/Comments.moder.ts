import { model, Schema } from "mongoose";

const CommentsSchema = new Schema({
  reviewId: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});

export const CommentsModel = model("comment", CommentsSchema);
