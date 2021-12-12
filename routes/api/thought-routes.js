const router = require('express').Router();
const {
  addThought,
  removeThought,
  addReply,
  removeReply
} = require('../../controllers/thought-controller');

// /api/thoughts/<userId>
router.route('/:userId').post(addThought);

// /api/thoughts/<userId>/<commentId>
router
  .route('/:userId/:thoughtId')
  .put(addReply)
  .delete(removeThought);

// /api/thoughts/<thoughtId>/<commentId>/<replyId>
router.route('/:userId/:thoughtId/:replyId').delete(removeReply);

module.exports = router;