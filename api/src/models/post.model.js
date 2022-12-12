const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    weight: {
        type: Number,
    },
    size: {
        type: Number,
    },
    style: {
        type: String,
    },
    price:{
        type: Number,
    },
    description: {
        type: String,
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    bookings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Booking"
    }],
    isAvailable: {
        type: Boolean,
        default: true
    }
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;