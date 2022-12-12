const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    description: {
        type: String,
    },
    starts: {
        type: Number,
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

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;