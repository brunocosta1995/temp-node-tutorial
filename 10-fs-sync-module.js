//readFileSync obtém os dados obtidos no arquivo lido
//writeFileSync cria um arquivo com novos dados /sobrescreve /adiciona dados ao arquivo
const { readFileSync, writeFileSync } = require("fs");
const path = require("path");

const firstFilePath = path.resolve(__dirname, "content", "first.txt");

const first = readFileSync(firstFilePath, "utf-8");
const second = readFileSync("./content/subfolder/second.txt", "utf-8");

console.log(first);
console.log(second);

//writeFileSync com dois parâmetros sobrescreve todos os dados
//com terceiro parâmetro {flag: 'a'} adiciona os novos dados aos dados anteriores
writeFileSync(
  "./content/resultado-fs-sync-module.txt",
  `O resultado é: ${first} + ${second}`,
  { flag: "a" }
);
