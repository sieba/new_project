import { Router } from "express";
import { register } from "../controllers/SignupController.js";
import { validateSignup } from "../middleware/ValidateSignup.js";
export const SignupRoutes = Router();

// ____________________________middleware         controller
SignupRoutes.post("/signup", validateSignup,      register);

