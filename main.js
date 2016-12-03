var http = require("http");
var state = 10;
http.createServer(function (request, response) {
  if (request.url === "/" || request.url === "/state" || request.url === "/reset") {
    response.writeHead(200, {'content-type' : 'text/plain'});
    response.write("Current state is: " + (state = 10));
    console.log(state);
    response.end();
  }
  else if (request.url === "/add") {
    response.writeHead(200, {'content-type' : 'text/plain'});
    response.write("Current state is: " + (state = state + 1));
    console.log(state);
    response.end();
  }
  else if (request.url === "/remove") {
    response.writeHead(200, {'content-type' : 'text/plain'});
    response.write("Current state is: " + (state = state - 1));
    console.log(state);
    response.end();
  }
  else {
    response.writeHead(404, {'content-type' : 'text/plain'});
    response.write("The page you are looking for is not found. Please check the spelling or refer to the readme file");
    console.log(state);
    response.end();
  };
}).listen(8080,console.log("server running at http://127.0.0.1:8080/"));
