const http = require("http");

http
  .createServer(function(request, response) {
    console.log("request received");
    response.end("hello world.", "utf-8");
  })
  .listen(3000);
console.log("server started on PORT 3000");