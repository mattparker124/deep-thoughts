const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    addThought,
    updateThought,
    addReaction,
    removeReaction,
    removeThought
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThoughts);

router
    .route('/:userId')
    .get(getThoughtById)
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .put(updateThought)
    .post(addReaction)
    .delete(removeThought);

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;