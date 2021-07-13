const router = require('express').Router();
const {User, Post, Comment} = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
    User.findAll({
        attributes: {exclude:['password']}
    })
    .then (data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
    User.findOne ({
        attributes: {exclude:['password']},
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Post,
                attributes: ['id', 'post_title', 'post']
            },
            {
                model: Comment,
                attributes: ['id', 'comment'],
                include: {
                    model: Post,
                    attributes: ['post_title']
                }
            },
        ]
    })
    .then(data => res.json(data))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/', async (req, res) => {
    try {
        const data = await User.create({
            user_name: req.body.user_name,
            email: req.body.email,
            password: req.body.password
        });
    
        req.session.save(() => {
          req.session.userId = data.dataValues.id
          user = data.dataValues.user_name
          req.session.loggedIn = true;
          res
            .status(200)
            .json({message: 'You are now logged in!' });
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.post('/login', async (req, res) => {
    try {
        const data = await User.findOne({
          where: {
            email: req.body.email,
          },
        });

        if (!data) {
          res
            .status(400)
            .json({ message: 'Incorrect email. Please try again!' });
          return;
        }

        console.log(data.dataValues.user_name)
    
        const validPassword = await data.checkPassword(req.body.password);
    
        if (!validPassword) {
          res
            .status(400)
            .json({ message: 'Incorrect password. Please try again!' });
          return;
        }
    
        req.session.save(() => {
          req.session.userId = data.dataValues.id
          user = data.dataValues.user_name
          req.session.loggedIn = true;
          res
            .status(200)
            .json({message: 'You are now logged in!' });
        });
      } catch (err) {
        console.log(err);
        res.status(500).json(err);
      }
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(200).end();
      });
    } else {
      res.status(400).end();
    }
});

module.exports = router;