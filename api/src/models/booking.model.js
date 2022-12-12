const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    telephoneNumber: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;