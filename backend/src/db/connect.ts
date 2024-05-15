import mongoose from "mongoose";
import { Excuse, type ExcuseType } from "./Excuse.model";
import { excusesData } from "./excusesData";

export const dbConnect = async () => {
  await mongoose.connect("mongodb://mongo:27017/dev-excuses");
};

export const getAllExcuses = async () => await Excuse.find();

export const deleteAllExcuses = async () => await Excuse.deleteMany();

export const getOneExcuseByHttp_code = async (http_code: number) =>
  await Excuse.findOne({ http_code });

export const createOneExcuse = async (excuse: ExcuseType) =>
  await Excuse.create(excuse);

export const createManyExcuses = async (excuses: ExcuseType[]) =>
  await Excuse.create(excuses);

export const seedDB = async () => await createManyExcuses(excusesData);
