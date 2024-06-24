const express = require('express');
const app = express();
let {people} = require('./data');

//static assets com middleware
app.use(express.static('./methods-public'));

// body parser
app.use(express.urlencoded({extended: false}));

//parse json
app.use(express.json());

app.get('/api/people', (req, res) => {
  res.status(200).json({success: true, data: people})
});

app.post('/api/people', (req, res) => {
  const {name} = req.body;
  if (!name) {
    return res.status(401).json({success: false, msg: 'entre com um nome'})
  }
  res.status(201).json({success: true, person: name})
})

app.post('/login', (req, res) => {
  const {name} = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send('Entre com um nome');
})


app.listen(5000, ()=>{
  console.log('Listen to the port 5000');
})
