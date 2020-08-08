const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
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

const exercise = mongoose.model("exercise", fitnessSchema);

module.exports = exercise;
