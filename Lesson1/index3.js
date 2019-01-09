// HTTP Status Codes
// https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

const { createServer } = require("http");

createServer((req, res) => {
  // indicate that there is no content
  res.writeHead(204, "My Custom Message");
  res.end();
}).listen(8080);
