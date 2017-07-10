var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
/*加载mongodb*/
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session); 


/*新家*/
var routes = require('./config/routes');

/*var index = require('./routes/index');
var users = require('./routes/users');*/

var app = express();
/*mongoose.connect('moogodb://localhost/blogOne');*/
mongoose.connect('mongodb://localhost/blogOne');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
/*app.set('view engine', 'ejs');*/
app.set('view engine', 'htm');
app.engine('.htm',require('ejs').__express);
console.log('的点点滴滴多多多多多多多多多多多')

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: "45454",
    store: new MongoStore({
		cookieSecret: 'jdghjf',
		db: 'blogOne',
		host: 'localhost'
	})
}));
 
/*app.use('/', index);
app.use('/users', users);*/
routes(app);   // 这个一定要放在这里

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
