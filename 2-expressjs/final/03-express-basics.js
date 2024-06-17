const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('HOME PAGE');
  console.log('User hit the resource');
})

app.get('/', (req, res) => {
  res.status(200).send('HOME PAGE');
  console.log('User hit the resource');
})

app.get('/about', (req, res) => {
  res.status(200).send('ABOUT');
})

//resposta para o erro 404
app.all('*', (req, res) => {
  res.status(404).send('<h1>Página não encontrada</h1>');
})

app.listen(5000, ()=>{
  console.log('Server is listening on port 5000');
})




// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

