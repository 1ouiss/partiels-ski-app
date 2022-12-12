const commentModel = require('../models/comment.model')

const commentController = {
    getAllComments: async (req, res) => {
        try {
            const comments = await commentModel.find()
            res.send(comments)
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    getCommentById: async (req, res) => {
        try {
            const comment = await commentModel.findById(req.params.id)
            res.send(comment)
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    create: async (req, res) => {
        try {
            const newComment = new commentModel(req.body);
            await newComment.save();
            res.send(newComment);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    update: async (req, res) => {
        try {     
            const comment = await commentModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(comment);
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    delete: async (req, res) => {
        try {
            const comment = await commentModel.findByIdAndDelete(req.params.id)
            res.status(204).send({message: "Comment deleted"});
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }
}
