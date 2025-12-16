import express from "express";
import School from "../models/School.js";

const router = express.Router();

// GET all schools
router.get("/schools", async (req, res) => {
  try {
    const schools = await School.find().sort({ name: 1 });
    res.status(200).json(schools); // ✅ returns ARRAY
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch schools" });
  }
});

export default router;
