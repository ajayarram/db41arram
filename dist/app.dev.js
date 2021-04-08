"use strict";

var createError = require('http-errors');

var express = require('express');

var path = require('path');

var cookieParser = require('cookie-parser');

var logger = require('morgan');

var connectionString = process.env.MONGO_CON;
mongoose = require('mongoose');
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');

var cowRouter = require('./routes/cow');

var starsRouter = require('./routes/stars');

var slotRouter = require('./routes/slot');

var cow = require("./models/cow");

var resourceRouter = require("./routes/resource");

var app = express(); // view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express["static"](path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cow', cowRouter);
app.use('/stars', starsRouter);
app.use('/slot', slotRouter);
app.use('/resource', resourceRouter); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  next(createError(404));
}); // error handler

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

  res.status(err.status || 500);
  res.render('error');
}); // We can seed the collection if needed on server start

function recreateDB() {
  var instance1, instance2, instance3;
  return regeneratorRuntime.async(function recreateDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(cow.deleteMany());

        case 2:
          instance1 = new cow({
            cowName: "Ongole",
            habitat: "rural area",
            price: 30000
          });
          instance1.save(function (err, doc) {
            if (err) return console.error(err);
            console.log("First object saved");
          });
          instance2 = new cow({
            cowName: "prakasham",
            habitat: "cattle shed",
            price: 50000
          });
          instance2.save(function (err, doc) {
            if (err) return console.error(err);
            console.log("Second object saved");
          });
          instance3 = new cow({
            cowName: "Guntur",
            habitat: "Village place",
            price: 80000
          });
          instance3.save(function (err, doc) {
            if (err) return console.error(err);
            console.log("third object saved");
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  });
}

var reseed = true;

if (reseed) {
  recreateDB();
}

module.exports = app; //Get the default connection

var db = mongoose.connection; //Bind connection to error event

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function () {
  console.log("Connection to DB succeeded");
});