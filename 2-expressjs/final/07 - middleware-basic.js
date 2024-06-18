const express = require('express');
const app = express();


//MIDDLEWARE: Deve ser um arquivo separado
// req => middleware => res
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const hours = new Date().getHours();
  console.log(method, url, hours);
  next();
}

app.get('/', logger, (req, res) => {
  res.send('HOME PAGE');
})

app.get('/about', logger, (req, res) => {
  res.send('ABOUT PAGE');
})


app.listen(5000, () => {
  console.log('Listen to the port 5000...');
})