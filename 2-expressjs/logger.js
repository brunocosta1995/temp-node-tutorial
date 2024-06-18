const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const hours = new Date().getHours();
  console.log(method, url, hours);
  next();
};

module.exports = logger;
