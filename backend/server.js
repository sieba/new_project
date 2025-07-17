import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import dbconnection from './config/dbconnection.js';
import crypto from "crypto";
import { SignupRoutes } from './routes/signupRoutes.js';
import { SigninRoutes } from './routes/signinRoutes.js';

dotenv.config();
const app = express();

// for testing JWT secret generation
// const secret = crypto.randomBytes(64).toString("hex");


app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());

app.use('/api', SignupRoutes);
app.use("/api", SigninRoutes);






// app.post('/api/auth', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const [rows] = await dbconnection.execute('SELECT * FROM users WHERE email = ?', [email]);
//     if (!rows.length) return res.status(401).json({ message: 'Invalid credentials' });

//     const user = rows[0];
//     const validPassword = await bcrypt.compare(password, user.password);
//     if (!validPassword) return res.status(401).json({ message: 'Invalid credentials' });


//     const payload = { id: user.userid, email: user.email, role: user.role };
//     const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
   

//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: true, // set to true if using HTTPS
//       sameSite: "Lax", // allow cross-site
//       // maxAge: 3600000,
//     });

    
//     console.log('Login successful for user:', user.userid);
//     return res.json({
//     message: "Login successful",
//         data: {
//             userid: user.userid,
//             email: user.email,
//             role: user.role,
//         },
//     });

//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });




// // // JWT Authentication Middleware
// // export const verifyUserToken = (req, res, next) => {
// //   const token = req.cookies.token;
// //   if (!token) return res.status(401).json({ message: 'Unauthorized: No token, please log in' });

// //   jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
// //     if (err) return res.status(401).json({ message: 'Unauthorized: Invalid token' });
// //     req.user = decoded;
// //     next();
// //   });
// // }

// // Protected Route
// app.get('/api/verify', verifyUserToken, (req, res) => {
//   console.log('Accessing dashboard as user:', req.user);
//   return res.json({
//     message: "Authenticated",
//     user: {
//       id: req.user.id,
//       email: req.user.email,
//       role: req.user.role,
//     }
//   });
// });












app.listen(process.env.PORT || 3001, () =>
  console.log(`Running on PORT ${process.env.PORT}`)
);
