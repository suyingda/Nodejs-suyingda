var fs = require('fs');
fs.readFile('index.text','utf-8',function(err,data){
	console.log(data);
	fs.writeFile('input2.txt',data,function(err){
 
})
})
/*var str_data = fs.readFileSync('input.txt','utf-8');
console.log(str_data)*/
 

 function readFile(){
 	return new Promise(function(resolve,reject){
 		fs.readFile('input.txt',function(err,data){
 			if(err){
 				reject(err)
 			}else{
 				resolve(data)
 			}
 		})
 	})
 }


