var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
                 require('sinon-mongoose');
const sinon = require('sinon');

var config = require('./config');  //Configuration file.

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

//Mongodb Models
//Importing our todo model for our unit testing.
var Todo = require('./schema_model/schema_model');

//Mongodb Connection
mongoose.connect(config.db.connection);

mongoose.connection.on('connected',function(){
  console.log("Mongodb connection is up and running!");
});

mongoose.connection.on('error',function(){
  console.log("Internal server error while connecting to the database server.");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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

//Test
// describe('Get all todos',function(){
//     //Test will pass If we get all todos.
//
//     //Creating test case for success and error scenerios.
//     it("should return all todos", function(done){
//         var TodoMock = sinon.mock(Todo);
//         var expectedResult = {status: true, todo: []};
//         TodoMock.expects('find').yields(null, expectedResult);
//         Todo.find(function (err, result) {
//             TodoMock.verify();
//             TodoMock.restore();
//             expect(result.status).to.be.true;
//             done();
//         });
//     });
//
//     // Test will pass if we fail to get a todo.
//     it("should return error", function(done){
//         var TodoMock = sinon.mock(Todo);
//         var expectedResult = {status: false, error: "Something went wrong"};
//         TodoMock.expects('find').yields(expectedResult, null);
//         Todo.find(function (err, result) {
//             TodoMock.verify();
//             TodoMock.restore();
//             expect(err.status).to.not.be.true;
//             done();
//         });
//     });
// });

module.exports = app;
