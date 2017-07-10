function People(name,sx){
	this.name=name;
	this.sx=sx;
}
People.prototype.sayHello = function(){
	console.log("你好"+this.name+"我好"+this.sx)
}
 
module.exports = People;