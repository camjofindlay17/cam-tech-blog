const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res)=> {
    try {
        const data = await Post.findAll({
            attributes: ['id', 'post_title', 'post'],
            order:[['id', 'DESC']],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'text', 'post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['user_name']
                    }
                },
                {
                    model: User,
                    attributes: ['user_name']
                },
            ]
        });
    res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await Post.findOne({
            where: {
              id: req.params.id
            },
            attributes: ['id', 'post_title', 'post'],
            include: [
                {
                    model: Comment,
                    attributes: ['id', 'text', 'post_id', 'user_id'],
                    include: {
                        model: User,
                        attributes: ['user_name']
                    }
                },
                {
                    model: User,
                    attributes: ['user_name']
                },
            ]
        });
    if (!data) {
        res.status(404).json({message: 'No post found with this id'})
    }
    res.status(200).json(data)
    } catch (err) {
      res.status(500).json(err);
    }
})

router.post('/', async (req, res) => {
    try {
        const data = await Post.create ({
            post_title: req.body.post_title,
            post: req.body.post,
            user_id: req.session.userId
      })
      res.status(200).json(data)
    } catch(err) {
        console.log(err);
        res.status(400).json(err);
    };
});

router.put('/:id', withAuth, (req, res) => {
    Post.update({
        post_title: req.body.post_title,
        post: req.body.post
    },
    {
        where: {
          id: req.params.id
        }
    })
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).json(err)
    })
});

router.delete('/:id', async (req, res) => {
    try {
      const data = await Post.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!data) {
        res.status(404).json({ message: 'No post found with this id!' });
        return;
      }
  
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router