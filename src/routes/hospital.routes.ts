import { registerHospital } from "../controllers/hospitalController";

import { Router } from "express";

const router: Router = Router();

router.post("/register", registerHospital);

export default router;
