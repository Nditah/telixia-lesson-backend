// Body Content
const { createServer } = require("http");

createServer((req, res) => {
  if (req.method === "POST") {
    let data = "";
    req.on("data", chunk => {
      data += chunk;
    });

    req.on("end", () => {
      try {
        const requestData = JSON.parse(data);
        requestData.ourMessage = "success";
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(requestData));
      } catch (e) {
        res.statusCode = 400;
        res.end("Invalid JSON");
      }
    });
  } else {
    res.statusCode = 400;
    res.end("Unsupported method, please POST a JSON object");
  }
}).listen(8080);

// > curl http://localhost:8080
// > curl -X POST -d "some random string" http://localhost:8080
// > curl -X POST -d '{"property": true}' http://localhost:8080
