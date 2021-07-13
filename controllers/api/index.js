const router = require('express').Router();

const user = require('./user-routes');
const post = require('./post-routes');
const comment = require('./comment-routes');

router.use('/users', user);
router.use('/post', post);
router.use('/comments', comment);

module.exports = router;