const { readFile, writeFile } = require("fs").promises; //funciona da mesma forma e transforma as funções retornando uma promisse
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/subfolder/second.txt","utf8");
    await writeFile("./content/resultado-await-async-promises",`ESTE É O RESULTADO: ${first} ${second}`);

    // const first = await readFilePromise("./content/first.txt", "utf8");
    // const second = await readFilePromise("./content/subfolder/second.txt","utf8");
    // await writeFilePromise("./content/resultado-await-async-promises",`ESTE É O RESULTADO: ${first} ${second}`);
    console.log(first, second);
  } catch (err) {
    console.log(err);
  }
};

start();

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//       readFile(path, "utf8", (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   };

// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
