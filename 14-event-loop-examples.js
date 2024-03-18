// EVENT LOOP EXAMPLES

/*const {readFile} = require('fs');

console.log('started the first task');
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('complete first task')
});

console.log('starting the next task');*/

// operação assincrona
/*console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');*/

//processo continua sendo executado a cada 2s
/*setInterval(() => {
    console.log('hello');
}, 2000);
console.log('first!');*/


const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');
})

server.listen(5000, () => {
    console.log("Server Listen to the Port 5000.....")
})