const sessionChecker = (req, res, next) => {
  console.log(req.session.user)
  if (!req.session.user) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    next();
  }
};

module.exports = sessionChecker;
