const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(401).send("Entre com nome valido!");
  }
  res.status(201).send(`Welcome ${name}`);
});

module.exports = router;