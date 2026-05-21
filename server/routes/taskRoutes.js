const express = require("express");
const multer = require("multer");
const Task = require("../models/Task");

const router = express.Router();


// IMAGE STORAGE
const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },

});

const upload = multer({ storage });


// GET TASKS
router.get("/:userId", async (req, res) => {

  try {

    const tasks = await Task.find({
      userId: req.params.userId,
    });

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// CREATE TASK
router.post("/", upload.single("image"), async (req, res) => {

  try {

    const task = await Task.create({

      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId,
      image: req.file
        ? `http://localhost:5000/uploads/${req.file.filename}`
        : "",

    });

    res.status(201).json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// UPDATE TASK
router.put("/:id", async (req, res) => {

  try {

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// COMPLETE TASK
router.put("/complete/:id", async (req, res) => {

  try {

    const task = await Task.findById(req.params.id);

    task.completed = !task.completed;

    await task.save();

    res.json(task);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});


// DELETE TASK
router.delete("/:id", async (req, res) => {

  try {

    await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task Deleted",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;