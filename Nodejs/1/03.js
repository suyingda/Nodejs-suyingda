
var http = require('http');
//我们现在需要引用新的模块fs,就是file system文件系统模块
//这个模块可以读取服务器硬盘上的文件、写入文件等等
var fs = require("fs")
var server = http.createServer(aa);


function aa(req,res){
//	res.setHeader("Content-Type","text/html;charset=UTF-8")
fs.readFile("../pages/haha.html",function(err,data){
	res.end(data.toString())
 
})

} 
server.listen(3000,'192.168.2.50');