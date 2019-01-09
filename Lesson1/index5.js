// HTTP Methods
// https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods

const { createServer } = require("http");

createServer((req, res) => {
  if (req.method === "GET") {
    return res.end("List of data");
  } else if (req.method === "POST") {
    // create new entity
    return res.end("success");
  } else {
    res.status(400);
    return res.end("Unsupported method");
  }
}).listen(8080);
