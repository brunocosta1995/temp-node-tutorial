// npm - glocal command, comes with node
// npm --version

// local dependency - use apenas neste projeto em particular
// npm i <packageName>

// global dependency - use em qualquer projeto
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - arquivo de manifestação (armazena importante informações sobre o projeto/package)
// manual approach (cria package.json na diretório razi, cria propriedades, etc.)
// npm init (passoa a passo, pressionar enter para pular)
// npm init -y (tudo no modo padrão-default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);
console.log("Hello People!"); //npm run dev
