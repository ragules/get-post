
var http=require('http');
var querystring=require('querystring');
var qs, name, email, pass;
http.createServer (function(req, res) {
var datal= '';
req.on('data', function (chunk) {
console.log(chunk);
datal += chunk;
console.log("Data in String format: "+datal);
});
req.on('end', function() {
qs=querystring.parse(datal);
console.log(qs);
name=qs['n'];
email=qs['e'];
pass=qs['pass'];
res.write("<h1>Hello "+name+",<h1> your email id "+email+" <h1>and your password is "+pass);
res.end();
});
}).listen(3005);
console.log("port is listen on 3005--------");
