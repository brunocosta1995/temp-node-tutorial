const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end(`Welcome to the Home page`);
  }
  if (req.url === "/about") {
    res.end("Here is our story!");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>You enter in a page that doesn't exist</p>
    <a href='/'>Back to Home Page!</a>`);
  }
});

server.listen(5000);
