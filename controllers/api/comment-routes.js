const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const data = await Comment.findAll({})
        res.status(200).json(data)
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post ('/', async (req,res) => {
    try {
      const data = await Comment.create ({
        text: req.body.text,
        post_id: req.body.post_id,
        user_id: req.session.userId
    })
    res.status(200).json(data)
  } catch(err) {
      console.log(err);
      res.status(400).json(err);
    };
});

router.delete('/:id', async (req, res) => {
    try {
      const data = await Comment.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!data) {
        res.status(404).json({ message: 'No library card found with that id!' });
        return;
      }
  
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router