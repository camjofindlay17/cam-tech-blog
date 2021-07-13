const { Comment } = require('../models')

commentData = [
    {
        text: "I just went over this in class!",
        post_id: 1,
        user_id: 3,
    },
    {
        text: "Samsung will always be better!",
        post_id: 2,
        user_id: 2,
    },
    {
        text: "This pandemic has changed everything",
        post_id: 3,
        user_id: 3,
    },
    {
        text: "They already need to replace him",
        post_id: 4,
        user_id: 1,
    },
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;