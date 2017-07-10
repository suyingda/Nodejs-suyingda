var http = require("http");
var fs = require("fs")
var server = http.createServer(aa);


function aa(req,res){
	 var ip = req.connection.remoteAddress;
	 console.log(ip +"用户来了开始重度计算");
	 var zong=0;
	 for(var i = 0 ;i<=100000;i++){
	 	var count=0;
	 	for (var j = 1;j<=i;j++){
	 		if(i%j==0){
	 			count ++;
	 		}

	 	}
	 	if(count ==2){
	 		zong++
	 	}
	 }
	 console.log(zong+"计算完了")
 
};
server.listen(3800,'192.168.2.50')