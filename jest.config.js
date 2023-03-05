var http = require('http');
var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var app = express();
var ejs = require('ejs');
ejs.open = '{{';
ejs.close = '}}';

var indexRouter = require('./routes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(indexRouter);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
http.createServer(app).listen(3002, function () {
    let PORT = 3002;
    console.log('listening on *:' + PORT);
});
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    app,
};
