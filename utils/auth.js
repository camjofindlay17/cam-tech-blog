const withAuth = (req, res, next) => {
  if (req.session.user_id) {
    next();
  } else {
    req.session.error = 'Access denied!';
    res.redirect('/login');
  }
};

module.exports = withAuth;
