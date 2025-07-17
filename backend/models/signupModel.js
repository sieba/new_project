import dbconnection from "../config/dbconnection.js";

export const findUserByEmail = async (email) => {
  const connection = await dbconnection;
  const sql = "SELECT * FROM users WHERE email = ?";
  const [rows] = await connection.query(sql, [email]);
  return rows;
};

export const insertNewUser = async (email, hashedPassword) => {
  const connection = await dbconnection;
  const sql = "INSERT INTO users (email, password) VALUES (?, ?)";
  const [result] = await connection.query(sql, [email, hashedPassword]);
  return result;
};
