module.exports = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).json({
      message: 'You must be logged in to perform this action.',
    });
  }
};
