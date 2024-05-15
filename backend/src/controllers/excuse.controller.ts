import { Response, Request, NextFunction } from "express";
import { response } from "../libs/utils";
import {
  getAllExcuses,
  createOneExcuse,
  createManyExcuses,
  getOneExcuseByHttp_code,
  deleteAllExcuses,
  seedDB,
} from "../db/connect";
import { Excuse } from "../db/Excuse.model";

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getAllExcuses();
    res.status(200).json(response(true, "Data fetched successfully", data));
  } catch (error) {
    next(error);
  }
};

const createOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await createOneExcuse(req.body);
    res.status(201).json(response(true, "Data created successfully", data));
  } catch (error) {
    next(error);
  }
};

const createMany = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await createManyExcuses(req.body);
    res.status(201).json(response(true, "Data created successfully", data));
  } catch (error) {
    next(error);
  }
};

const getOneByHttp_code = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = await getOneExcuseByHttp_code(Number(req.params.http_code));
    res.status(200).json(response(true, "Data fetched successfully", data));
  } catch (error) {
    next(error);
  }
};

const deleteAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await deleteAllExcuses();
    res.status(200).json(response(true, "Data deleted successfully", data));
  } catch (error) {
    next(error);
  }
};

const seed = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Excuse.deleteMany();
    const data = await seedDB();
    res.status(201).json(response(true, "Data seeded successfully", data));
  } catch (error) {
    next(error);
  }
};

export { seed, getAll, getOneByHttp_code, deleteAll, createOne, createMany };
