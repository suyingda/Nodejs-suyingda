var http = require("http");

var server = http.createServer(aa);
 
function aa(req,res){
	//	res.setHeader("Content-Type","text/html;charset=UTF-8")
	 var ip = req.connection.remoteAddress;
//	res.end(ip)
	//每个用户来的时候，随机一个数字
	var a= parseInt(Math.random()*100);
	if(a == 66){
		res.end("这个是字数来了"+a)
		throw new Error("恭喜" + ip + "+66666")
	}
	//显示出这个数字
	res.end("<h1>"+a.toString()+"</h1>");
};
server.listen(3800,'192.168.2.50')