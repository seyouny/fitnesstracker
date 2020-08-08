const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
day:{
    type: Date,
    default: Date.now
    },
exercise:[{
    weight: {
        type: Number,
          required: "Enter the weight"
        },
        sets: {
          type: Number,
          required: "Enter the amount of sets"
        },
        reps: {
          type: Number,
          required: "Enter the amount of reps"
        },
        duration: {
          type: Number,
          required: "Enter the duration"
        },
        distance: {
          type: Number,
          required: "Enter the distance"
        },
        type:{
            type: String,
            trim:true,
            required: "Enter the type of exercise"
        }
}]

})

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
