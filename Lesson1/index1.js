const { createServer } = require("http"); // built-in module

// Created a new server instance calling createServer function
const server = createServer();

// Added an event listener on request event to our server
server.on("request", (request, response) => {
  response.end(`\n\t==================\n\tHello, world!\n\t==================\n`);
});

// Ran our server using port specified in environment variables with fallback on 8080
server.listen(8080, () => {
  console.log(`starting new server at port 8080`);
});
