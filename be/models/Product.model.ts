import { model, Schema } from "mongoose";
import { COLLECTIONS } from "../constant/const";
const ProductSchema = new Schema({
  productName: { type: String, required: true },
  categoryId: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  thumbnails: { type: String, required: true },
  images: [{ type: String, required: true }],
  coupon: { type: String, required: true },
  salePercent: { type: Number, required: true },
  description: { type: String, required: true },
  viewsCount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
export const ProductModel = model("product", ProductSchema);
