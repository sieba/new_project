import { Router } from "express";
import  { signin } from "../controllers/SigninController.js";
import { ValidateSignin } from "../middleware/ValidateSignin.js";
import { verifyUserToken } from "../middleware/verifyUsersToken.js";
export const SigninRoutes = Router();

SigninRoutes.post("/signin", ValidateSignin, signin);


SigninRoutes.get("/verify", verifyUserToken, (req, res) => {
  console.log("Accessing dashboard as user:", req.user);
  res.json({
    message: "Authenticated",
    user: {
      id: req.user.id,
      email: req.user.email,
      role: req.user.role,
    },
  });
});

