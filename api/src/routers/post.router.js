const router = require('express').Router();
const postController = require('../controllers/post.controller');

const endPoint = '/post'

router.get(`${endPoint}/`, postController.getAllPosts);
router.get(`${endPoint}/:id`, postController.getPostById);
router.post(`${endPoint}/`, postController.create);
router.put(`${endPoint}/:id`, postController.update);
router.delete(`${endPoint}/:id`, postController.delete);

module.exports = router;
