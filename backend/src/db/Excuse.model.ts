import mongoose from "mongoose";

// create a schema for the Excuse model
const excuseSchema = new mongoose.Schema({
  message: String,
  tag: String,
  http_code: Number,
});

// create the Excuse model
export const Excuse = mongoose.model("Excuse", excuseSchema);

export type ExcuseType = {
  message: string;
  tag: string;
  http_code: number;
};
