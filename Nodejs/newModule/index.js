var http = require('http');

const async_hooks = require('async_hooks');

 var server = http.createServer(aa);
const circle = require('./circle.js');
console.log(`半径为 4 的圆的面积是 ${circle.area(4)}`);

 function aa(req,res){
 	alert(async_hooks)
 	res.end('hello world2');
 
 }

  server.listen(3300);