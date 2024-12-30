var http = require("http");
var server = http.createServer(function(request, response) {
    if (request.url === "/") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<h1>Hello World</h1>");
        response.end("<html><body>This is home Page! URL was: " + request.url + "</body></html>");
    } else if (request.url === "/student") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<h1>Hello Student</h1>");
        response.end("<html><body>This is Student Page! URL was: " + request.url + "</body></html>");
    } else if (request.url === "/admin") {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("<h1>Hello Admin</h1>");
        response.end("<html><body>This is Admin Page! URL was: " + request.url + "</body></html>");
    } else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.end("404 Not Found");
    }
});
server.listen(3000, function(){
    console.log('Server is listening on port 3000');
});

