const postModel = require('../models/post.model')

const postController = {
    getAllPosts: async (req, res) => {
        try {
            const posts = await postModel.find()
            res.send(posts)
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    getPostById: async (req, res) => {
        try {
            const post = await postModel.findById(req.params.id).populate("Comment").populate("Booking")
            res.send(post)
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    create: async (req, res) => {
        try {
            const newPost = new postModel(req.body);
            await newPost.save();
            res.send(newPost);
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    },
    update: async (req, res) => {
        try {     
            const post = await postModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(post);
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    },
    delete: async (req, res) => {
        try {
            const post = await postModel.findByIdAndDelete(req.params.id)
            res.status(204).send({message: "Post deleted"});
        } catch (error) {
            res.status(400).send({message: error.message})
        }
    }

}

module.exports = postController