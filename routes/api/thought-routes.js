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
    .post(addThought);

router
    .route('/:userId/:thoughtId')
    .post(addReaction)
    .delete(removeThought)
    .get(getThoughtById)
    .put(updateThought);

router
    .route('/:userId/:thoughtId/:reactionId')
    .delete(removeReaction);

module.exports = router;