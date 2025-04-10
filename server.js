import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import User from 'User.js';

const app = express();
const port = 3000;

// For __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/balanceddiet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.post("/log-meal", async (req, res) => {
  const { userId, food, quantity } = req.body;
  const user = await User.findOne({ userId }) || new User({ userId, meals: [], goals: {} });

  user.meals.push({ food, quantity });
  await user.save();

  res.json({ message: "Meal logged successfully." });
});

app.post("/set-goals", async (req, res) => {
  const { userId, goals } = req.body;
  const user = await User.findOne({ userId }) || new User({ userId, meals: [], goals: {} });

  user.goals = goals;
  await user.save();

  res.json({ message: "Goals updated successfully." });
});

app.get("/user-summary", async (req, res) => {
  const { userId } = req.query;
  const user = await User.findOne({ userId });

  if (!user) return res.json({ message: "User not found." });

  // Dummy nutrient data per 100g
  const nutritionDB = {
    rice: { calories: 130, protein: 2.4, carbs: 28, fat: 0.3, fiber: 0.4 },
    egg: { calories: 155, protein: 13, carbs: 1.1, fat: 11, fiber: 0 },
    apple: { calories: 52, protein: 0.3, carbs: 14, fat: 0.2, fiber: 2.4 },
    milk: { calories: 42, protein: 3.4, carbs: 5, fat: 1, fiber: 0 },
  };

  let summary = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };

  user.meals.forEach(({ food, quantity }) => {
    const item = nutritionDB[food.toLowerCase()];
    if (item) {
      const factor = quantity / 100;
      summary.calories += item.calories * factor;
      summary.protein += item.protein * factor;
      summary.carbs += item.carbs * factor;
      summary.fat += item.fat * factor;
      summary.fiber += item.fiber * factor;
    }
  });

  res.json({ ...summary, goals: user.goals || {} });
});

// Start server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
