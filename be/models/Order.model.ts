import { model, Schema } from "mongoose";

const OrderSchema = new Schema({
  orderNumber: { type: String, required: true },
  status: {
    type: String,
    enum: ["Ordered", "PreparingToShip", "Shipped", "Delivered"],
    required: true,
  },
  phoneNumber: { type: Number, required: true },
  deliveryDate: { type: Date, default: Date.now },
  amountPaid: { type: Number, required: true },
  amoutToBePaid: { type: Number, required: true },
  coupon: { type: String, required: true },
  description: { type: String },
  orderType: { type: String, enum: ["Electron baraa", "Ahuin baraa"] },
  details: [],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const OrderModel = model("order", OrderSchema);
