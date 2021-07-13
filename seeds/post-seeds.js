const { Post } = require('../models');

postData = [
    {
        post_title: "Test",
        post: "This is a test post",
        user_id: 2
    },
    {
        post_title: "Apple Needs This New Hire to Be Heroic",
        post: "For anyone that still believes that Apple can be more than an incredibly profitable company; but one you can also be proud of for how it treats its people and customers.",
        user_id: 1
    },
    {
        post_title: "Nvidia and the End of Movies as We Know Them",
        post: "GTC21, this year's Nvidia GPU Technology Conference, was terrific as always. The alleged focus was on AI and autonomous cars.",
        user_id: 2
    },
    {
        post_title: "Intel CEO Gives Unwarlike 'Going to War' Speech",
        post: "Pat Gelsinger's Intel is looking like the very different company it needs to be. It is more collaborative than combative, more strategic than tactical, with a far more effective plan than it has had since Andy Grove left the firm.",
        user_id: 3
    },
    {
        post_title: "The Evolving Future of the Office",
        post: "I participated in a group analyst event several weeks ago about companies converting their offices into collections of meeting rooms.",
        user_id: 1
    },
    {
        post_title: "Get No-Fuss File-Level Crypto With Fscrypt",
        post: "This piece is a demonstration of one means of setting up file-level encryption which is widely available for Linux desktop users.",
        user_id: 3
    },
]

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;