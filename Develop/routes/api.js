const router = require("express").Router();
const workouts = require("../models/workout.js");
const mongoose = require("mongoose");

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

router.put("/api/workouts/:id",(req,res) => {
    var idListed = req.body;
    var updatess = {id:req.params.id};
    workouts.findOneAndUpdate (updatess,{$push:{exercise:idListed}},{new:true})

    .then(dbWorkout => {

        res.json(dbWorkout)
    })
    .catch(err =>{
        res.status(400).json(err);
      });
})
router.get("/api/workouts/range", (req,res) =>{
    workouts.find({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err =>{
        res.status(400).json(err);
      });
})
module.exports = router;
