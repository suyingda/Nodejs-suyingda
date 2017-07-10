var http = require("http");
var fs =require("fs");

var server = http.createServer(aa);

function aa(req,res){
	res.setHeader("Content-Type","text/html;charset=UTF-8")
	switch(req.url){
		case "/a":
		fs.readFile("../pages/haha.html",function(err,data){
			res.end(data.toString())

		});
		break;
		case "/b":
		fs.readFile("../pages/haha2.html",function(err,data){
			res.end(data.toString())

		});
		break;
		case "/pages/image/1.jpg":
		fs.readFile("../pages/image/1.jpg",function(err,data){
			res.setHeader("Content-Type","image/jpg")
			res.end(data);
		});
		break;
		case "/pages/css/css.css":
		fs.readFile("../pages/css/css.css",function(err,data){
			res.setHeader("Content-Type","text/css")
			res.end(data.toString());
		});
		break;
		default :
		res.end("对不起，没有这个页面");
		break;
	}
}
server.listen(3800,"192.168.2.50")