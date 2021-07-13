const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth')

router.get("/", async (req, res) => {
  try{
    const data = await Post.findAll({
       include: [
          { 
             model: User,
             attributes: ['user_name']
          }
       ],
     })
     const posts = data.map(post => post.get({ plain: true }));
      res.render('homepage', {
        posts, loggedIn: req.session.loggedIn });
     }catch(err) {
       res.status(500).json(err)
     }
});

router.get("/dashboard", async (req, res) => {
  try{
    const data = await Post.findAll({
      where: {
        user_id: req.session.userId
      }
     })
     const posts = data.map(post => post.get({ plain: true }));
      res.render('dashboard', {
        posts, loggedIn: req.session.loggedIn });
     }catch(err) {
       res.status(500).json(err)
     }
});


router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
});

router.get('/sign-up', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/login');
    return;
  }

  res.render('sign-up');
});

router.get('/post/:id', async (req, res) => {
    try {
        const data = await Post.findByPk(req.params.id, {
            include: [
              {
                model: User,
                attributes: ['user_name']
              },
              {
                  model: Comment,
                  include: {
                      model: User,
                      attributes: ['user_name']
              }
            },
          ]
        });
    
    const posts = data.get({ plain: true })
    console.log(posts)

    res.render('post', {posts, loggedIn: req.session.loggedIn})

    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router