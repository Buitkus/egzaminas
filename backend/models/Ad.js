const mongoose = require("mongoose");

const Ad = mongoose.model("User", new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please add a name"]
    },
    description: {
        type: String,
        trim: true.valueOf,
        required: [true, "please add a description"]
    },
    image: {
        type: String,
        required: [true, "please add a image"]
    },
    price: {
        type: Number,
        required: [true, "please add a price"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category"
    },
    date: {
        type: Date,
        default: Date.now
    }
}));

module.exports = Ad;
