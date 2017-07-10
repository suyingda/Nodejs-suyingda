
 var http = require('http');

 var server = http.createServer(aa);
 server.listen(3000,'192.168.2.50');

 function aa(req,res){
 
 	res.end('hello world');
 }
// //require是内置函数，表示引用模块（modules）.http是一个内置模块
// /*var http = require("http");*/
// var http = require('http');

// //开启一个服务器,这个是一个异步函数，Node中基本所有函数都是异步的
// var server = http.createServer(function(req,res){
// 	//req表示request就是用户的请求
// 	//res表示responset就是服务器的响应
// 	console.log('创建服务器成功')
// });

// //监听一个端口，我们的阿帕奇占用了80端口 我们的默认端口是80
// server.listen(3300)


