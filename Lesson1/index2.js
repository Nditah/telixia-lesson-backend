const { createServer } = require("http");

createServer((request, response) => {
  response.setHeader("content-type", "application/json");
  const languages = request.headers["accept-language"] || "us-en";
  console.log(Object.keys(request));
  // we have to send buffers or strings, we can't just pass an object
  response.end(JSON.stringify({ name: "Telixia" }));
}).listen(8080);
