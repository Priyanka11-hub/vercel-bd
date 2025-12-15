import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import authRoutes from "./routes/auth.js";
import forgotRoutes from "./routes/forgotRoute.js";
import contactRoute from "./routes/contactRoute.js";
import schoolRoute from "./routes/schoolRoute.js";
// import adminRoute from "./routes/adminRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

// ✅ MongoDB connection (schoolNGODB from .env)
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// AUTH ROUTES (UNCHANGED)
app.use("/api/auth", authRoutes);
app.use("/api/auth", forgotRoutes);

// CONTACT ROUTE (UNCHANGED)
app.use("/api", contactRoute);

// ✅ SCHOOL ROUTE (CORRECT)
app.use("/api", schoolRoute);

// app.use("/api", adminRoute);

app.listen(3000, () => {
  console.log("Server running on 3000");
});
