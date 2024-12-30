var http = require("http");
var url=require("url");
querystring=require("querystring");
var server = http.createServer(function(request, response) {
   
    var query=url.parse(request.url).query;
    var name=querystring.parse(query) ["n"];
    var age=querystring.parse(query) ["a"];
    var gender=querystring.parse(query) ["g"];
    var ph=querystring.parse(query) ["phone"];
    var em=querystring.parse(query) ["e"];
    var pass=querystring.parse(query) ["pass"];
    response.write("<h1>NAME :"+name);
    response.write("<h1>AGE  :"+age);
    response.write("<h1>GENDER :"+ (gender === "M" ? "Male" : "Female") + "</h1>");
    response.write("<h1>PHONE NUMBER :"+ph);
    response.write("<h1>EMAIL :"+em);
    response.write("<h1>PASSWORD :"+pass);
    





});
server.listen(3000, function(){
    console.log('Server is listening on port 3001');
});

