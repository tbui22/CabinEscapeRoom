const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: [true, "Name is required"]
    },

    timeTaken: {
        type: String,
        required: [true]
    },

    seconds: {
        type: Number,
        required: [true]
    }


  }, {timestamps: true});


const User = mongoose.model("User", UserSchema)
module.exports = User;