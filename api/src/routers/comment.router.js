const router = require('express').Router();
const commentController = require('../controllers/comment.controller');

const endPoint = '/comment'

router.get(`${endPoint}/`, commentController.getAllComments);
router.get(`${endPoint}/:id`, commentController.getCommentById);
router.post(`${endPoint}/`, commentController.create);
router.put(`${endPoint}/:id`, commentController.update);
router.delete(`${endPoint}/:id`, commentController.delete);

module.exports = router;