const router = require("express").Router();
const workouts = require("../models/workout.js");
const mongoose = require("mongoose")

router.post("/api/workouts", ({ body }, res) => {
  workouts.create(body)
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  workouts.find({})
    .then(dbWorkouts => {
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
