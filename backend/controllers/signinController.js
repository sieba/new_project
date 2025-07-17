// controllers/authController.js
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { findUserByEmailForLogin } from "../models/SigninModel.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await findUserByEmailForLogin(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = { id: user.userid, email: user.email, role: user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "Lax",
    });

    console.log("Login successful for user:", user.userid);
    return res.json({
      message: "Login successful",
      data: {
        userid: user.userid,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return res.status(500).json({ message: "Server error" });
  }
};
