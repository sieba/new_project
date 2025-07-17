import bcrypt from "bcrypt";
import { findUserByEmail, insertNewUser } from "../models/SignupModel.js";

const saltRounds = 10;

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await findUserByEmail(email);
    if (existingUser.length > 0) {
      return res.status(400).json({ error_message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const result = await insertNewUser(email, hashedPassword);

    if (result.affectedRows > 0) {
      return res.status(201).json({ message: "Successfully registered!" });
    } else {
      return res.status(500).json({ error_message: "Registration failed" });
    }
  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ error_message: "Server error", error: err });
  }
};























// import dbconnection from "../dbconnection.js";
// import bcrypt from "bcrypt";
// const salt = 10;

// const Registration = async (req, res) => {

//     try {
//         const { email, password } = req.body;

//         if (!email || !password) {
//             return res.status(400).json({ error_message: "Please complete the form to register" });
//         }

//         const connection = await dbconnection;
//         const sqlcommand = "SELECT * FROM users WHERE email = ?";
//         const [response] = await connection.query(sqlcommand, [email]);

//         if (response.length > 0) {
//             return res.status(400).json({ error_message: "Email already exists" });
//         }

//         const hashedPassword = await bcrypt.hash(password, salt);
//         const insertCommand = "INSERT INTO users (email, password) VALUES (?, ?)";
//         const [insertResponse] = await connection.query(insertCommand, [email, hashedPassword]);

//         if (insertResponse.affectedRows > 0) {
//             return res.status(201).json({ message: "You are now successfully registered" });
//         } else {
//             return res.status(500).json({ error_message: "User registration failed" });
//         }

//     } catch (error) {
//         console.error("Server error:", error);
//         return res.status(500).json({ error_message: "Server error", error });
//     }
// };

// export default { Registration };


