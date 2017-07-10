 var http = require('http');

 var server = http.createServer(aa);
 server.listen(3300);

 function aa(req,res){
 /*	res.writeHead(200,{'Content-Type':'text/html'})*/
 	res.end('hello world');
 }

 var a = 10;
 var b = a ; 
 console.log(a);
 console.log('--------------------')
 console.log(20)