import mongoose from "mongoose";

const excuseSchema = new mongoose.Schema({
  message: String,
  tag: String,
  http_code: Number,
});

export const Excuse = mongoose.model("Excuse", excuseSchema);

export type ExcuseType = {
  message: string;
  tag: string;
  http_code: number;
};
