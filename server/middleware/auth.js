const sessionChecker = (req, res, next) => {
  if (!req.session.user) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    next();
  }
};

module.exports = sessionChecker;
