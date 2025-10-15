import {
  registerHospital,
  getAllHospitals,
} from "../controllers/hospitalController";

import { Router } from "express";

const router: Router = Router();

router.post("/register", registerHospital);
router.get("/", getAllHospitals);

export default router;
