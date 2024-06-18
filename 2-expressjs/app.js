const express = require("express");
const app = express();
const logger = require("./logger"); //importando de logger.js from module.exports
const authorize = require('./authorize');
const morgan = require('morgan');

//MIDDLEWARE: Deve ser um arquivo separado
// req => middleware => res

// app.use(logger); //aplica em todos os routers a partir da ordem do script
// app.use('/api', logger); //aplica em todos a partir da rota espeificada
// app.use([logger, authorize]); //executa dois middlewares na ordem que está nos param da função
app.use(morgan('dev')); //middleare obtida no NPM 'third party'
app.get("/", morgan('short'),(req, res) => {
  res.send("HOME PAGE");
});
app.get("/about", (req, res) => {
  res.send("ABOUT PAGE");
});
app.get("/api/products", (req, res) => {
  res.send("PRODUCTS");
});
app.get("/api/items", [logger, authorize], (req, res) => { //aplicando o middleware apenas nessa rota
  console.log(req.user);
  res.send("ITEMS");
});
app.get("/api", (req, res) => {
  res.send("API");
});

app.listen(5000, () => {
  console.log("Listen to the port 5000...");
});
