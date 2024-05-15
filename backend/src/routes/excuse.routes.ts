import { Router } from "express";
import {
  getAll,
  createOne,
  createMany,
  getOneByHttp_code,
  seed,
} from "../controllers/excuse.controller";

const router: Router = Router();

router.get("/", getAll);

router.get("/seed", seed);

router.post("/createOne", createOne);

router.post("/createMany", createMany);

router.get("/:http_code", getOneByHttp_code);

export default router;
