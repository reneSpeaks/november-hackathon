import express from "express";
import { login, getProfile } from "../controller/user.js";
import { authenticate } from "../middleware/authenticate.js";
import { validateUser } from "../middleware/validateRequest.js";

const router = express.Router();

router.post("/login", validateUser, login);
router.get("/profile", authenticate, getProfile);

export default router;
