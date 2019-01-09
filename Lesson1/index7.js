// Query parameters
const { createServer } = require("http");

createServer((req, res) => {
  const { query } = require("url").parse(req.url, true);
  if (query.name) {
    res.end(`You requested parameter name with value ${query.name}`);
  } else {
    res.end("Hello!");
  }
}).listen(8080);