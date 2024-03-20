const { createReadStream } = require("fs");


//default 64kb
//último buffer - restante
//highWaterMark - controle de tamanho

const stream = createReadStream("./content/big-file.txt", {highWaterMark: 90000, encoding: 'utf8'});

stream.on("data", (result) => {
  console.log(result);
});

stream.on('error', (err) => console.log(err));


