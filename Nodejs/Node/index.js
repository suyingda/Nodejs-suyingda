var http = require('http');


var server = http.createServer(requestListener);

function requestListener(req,res){
	//res.setHeader("Content-Type","text/html;charset=UTF-8")
	//res.write("www.baidu.com");
	//res.end('关闭连接')
	console.log(req.method)
}

server.listen(8888);