const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercise = new Schema({
   type: {
      type: String,
      require: "Enter the type of exercise."
  }, 
  name: {
    type: String,
    trim: true,
    required: "Enter a name for the exercise"
  },
  duration: {
    type: Number,
    trim: true,
    required: "Enter a number"
  },
  weight: {
    type: Number,
    trim: true,
    required: "Enter a number"
  },
  reps: {
    type: Number,
    trim: true,
    required: "Enter a number"
  },
  sets: {
    type: Number,
    trim: true,
    required: "Enter a number"
  }
});

const Exercise = mongoose.model("exercise", exercise);

module.exports = Exercise;
