import { model, Schema } from "mongoose";

const ShoppingCardSchema = new Schema({
  orderNumber: String,
  productCount: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const ShoppingModel = model("ShoppingCart", ShoppingCardSchema);
