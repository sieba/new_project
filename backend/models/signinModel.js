// SigninModel.js
import dbconnection from "../config/dbconnection.js";
import bcrypt from "bcrypt";

// 1. Get the user row from DB
export const findUserByEmail = async (email) => {
  try {
    const connection = await dbconnection;
    const query = "SELECT * FROM users WHERE email = ?";
    const [rows] = await connection.execute(query, [email]);
    return rows;
  } catch (error) {
    console.error("Error finding user by email:", error);
    throw error;
  }
};

// 2. Compare plain password to hashed password
export const comparePassword = async (inputPassword, hashedPassword) => {
  try {
    const isMatch = await bcrypt.compare(inputPassword, hashedPassword);
    return isMatch;
  } catch (error) {
    console.error("Error comparing password:", error);
    throw error;
  }
};



export const findUserByEmailForLogin = async (email) => {
  const [rows] = await dbconnection.execute(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );
  return rows[0]; // Return the first matching user
};
