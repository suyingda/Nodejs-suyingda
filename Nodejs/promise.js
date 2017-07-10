
var fs = require('fs');
 function readFile(){
 	return new Promise(function(resolve,reject){
 		fs.readFile('input.txt','utf-8',function(err,data){
 			if(err){
 				reject(err)
 			}else{
 				resolve(data)
 			}
 		})
 	})
 }

function writeFile(message){
	return new Promise(function(resolve,reject){
		fs.writeFile('input2.txt',message,funciton(err){
			if(err){
				resolve(err)
			}else{
			 
			}
		})
	})
};
 var promise = readFile();
 promise.then(function(message){
 	console.log(message)
 })