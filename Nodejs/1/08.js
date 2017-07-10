var http = require("http");
var fs = require("fs")
var server = http.createServer(aa);


function aa(req,res){
	fs.readFile("../pages/image/1.jpg",function(err,data1){
		fs.readFile("../pages/image/2.jpg",function(err,data2){
			res.setHeader("Content-Type","image/jpg");
			res.write(data1);
			res.end(data2)
		})
	})
};
server.listen(3800,'192.168.2.50')