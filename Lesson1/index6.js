// Cookies
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

const { createServer } = require("http");

createServer((req, res) => {
  res.setHeader(
    "Set-Cookie",
    ["myCookie=myValue"],
    ["mySecondCookie=mySecondValue"]
  );
  res.end(`Your cookies are: ${req.headers.cookie}`);
}).listen(8080);
