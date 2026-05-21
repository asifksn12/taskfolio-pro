const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


// Test Route
app.get("/", (req, res) => {
  res.json({
    message: "Backend Server Running 🚀",
  });
});


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {

  console.log("MongoDB Connected ✅");

  app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000 🚀");
  });

})
.catch((error) => {
  console.log("MongoDB Error ❌");
  console.log(error);
});