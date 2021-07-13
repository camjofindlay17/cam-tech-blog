const User = require('./User')
const Post = require('./Post')
const Comment = require('./Comment')

Post.hasMany(Comment, {
    foreignkey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignkey: 'post_id'
});

User.hasMany(Post, {
    foreignkey: 'user_id'
});

User.hasMany(Comment, {
    foreignkey: 'user_id'
});

Comment.belongsTo(User, {
    foreignkey: 'user_id'
});

Post.belongsTo(User, {
    foreignkey:'user_id'
});

module.exports ={
    User,
    Post,
    Comment
}
