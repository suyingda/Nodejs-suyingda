module.exports = function(ccc){
	ccc.get('/',function(req,res,next){
	//	res.send('这个是我11导出去的1')
	res.render('index', { title: '这个修改的' });
    });
	ccc.get('/zhuce',function(req,res,next){
		/*	res.send('注册') */
		res.render('zhuce', { title: '注册1' });
	});
	ccc.post('/zhuce',function(req,res,next){
		console.log(req.body)
		 res.send('注册成功')
	});
	ccc.get('/denglu',function(req,res,next){
		res.render('denglu', { title: '登录2' });
	});
	ccc.get('/tuichu',function(req,res,next){
		res.send('退出') 
	});
}