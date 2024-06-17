const express = require('express');
const path = require('path');

const app = express();

//configurar static e middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
// o arquivo index.html foi renderizado pelo static
// })

app.all('*', (req, res) => {
  res.status(404).send('PÁGINA NÃO ENCONTRADA');
})

app.listen(5000, ()=>{
  console.log('Listen to the port 5000');
})