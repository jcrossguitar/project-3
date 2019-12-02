var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var axios = require("axios");
var mongoose = require("mongoose");
var react = require("react");
var dotenv = require("dotenv").config();
var PORT = process.env.PORT || 3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



var app = express();

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'client/build')));

console.log('indexRouter')
app.get('/api/test', (req, res) => res.json({ message: "hello", }))
app.use('/api', indexRouter);
app.use('/users', usersRouter);
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds139934.mlab.com:39934/heroku_09wrn10w"
  // "mongodb://localhost/products"
  ,
{
  useMongoClient: true
}
);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds349618.mlab.com:49618/heroku_n7p1d3bv", { useNewUrlParser: true});


app.listen(PORT, function() {
  console.log(`==> API Server now listening on PORT ${PORT}!`);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: err,
    message: err.message
  });
});

module.exports = app;
