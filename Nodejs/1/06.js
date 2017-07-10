var http = require("http");

var server = http.createServer(aa);

var a=0;
function aa(req,res){
	a++;
	res.end(a.toString());
};
server.listen(3800,'192.168.2.50')