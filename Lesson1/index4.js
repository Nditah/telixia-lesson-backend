// Routing

const { createServer } = require("http");

createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.end("You are on the main page!");
      break;
    case "/about":
      res.end("You are on about page!");
      break;
      case "/contact":
        res.end("Emene Junction, Enugu 08134836164");
        break;
    default:
      res.statusCode = 404;
      res.end("Page not found!");
  }
}).listen(8080);