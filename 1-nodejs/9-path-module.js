const path = require('path');

console.log(path.sep);

//junta os parâmetros para formar o diretório
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

//obtém a última parte do diretório
const base = path.basename(filePath);
console.log(base);

// cria o diretório desde a raiz 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.text');
console.log(absolute);


