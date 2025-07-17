import mysql2 from "mysql2/promise";
import dotenv from "dotenv";

// Load .env config
dotenv.config({
  path: "./.env/.env",
});

// Validate required env variables
if (!process.env.HOST_NAME || !process.env.USER_NAME || !process.env.DATABASE) {
  throw new Error("Missing required database environment variables.");
}

// Create MySQL connection pool
const dbconnection = mysql2.createPool({
  connectionLimit: 50,
  host: process.env.HOST_NAME,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// Test the connection
async function testDBConnection() {
  try {
    await dbconnection.getConnection();
    console.log("✅ Database is connected to MySQL");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
}

testDBConnection();


export default dbconnection;
