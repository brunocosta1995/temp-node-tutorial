const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "bruno") {
    req.user = { name: "bruno", id: 4 };
    next();
  } else {
    res.status(401).send("Unauthorized");
    next();
  }
};

module.exports = authorize;
