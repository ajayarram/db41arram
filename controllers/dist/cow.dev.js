"use strict";

var cow = require('../models/cow'); // List of all cows
// List of all cows


exports.cow_list = function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(cow.find());

        case 3:
          thecow = _context.sent;
          res.send(thecow);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.error(500, "{\"error\": ".concat(_context.t0, "}"));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // for a specific cow.


exports.cow_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: cow detail: ' + req.params.id);
}; // Handle cow create on POST.


exports.cow_create_post = function _callee2(req, res) {
  var document, result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(req.body);
          document = new cow(); // We are looking for a body, since POST does not have query parameters.
          // Even though bodies can be in many different formats, we will be picky
          // and require that it be a json object
          // {"cowtype":"goat", "cost":12, "size":"large"}

          document.cowName = req.body.cowName;
          document.habitat = req.body.habitat;
          document.price = req.body.price;
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(document.save());

        case 8:
          result = _context2.sent;
          res.send(result);
          _context2.next = 15;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](5);
          res.error(500, "{\"error\": ".concat(_context2.t0, "}"));

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 12]]);
}; // Handle Cow delete form on DELETE.


exports.cow_delete = function (req, res) {
  res.send('NOT IMPLEMENTED: cow delete DELETE ' + req.params.id);
}; // Handle Cow update form on PUT.


exports.cow_update_put = function (req, res) {
  res.send('NOT IMPLEMENTED: cow update PUT' + req.params.id);
}; // VIEWS
// Handle a show all view


exports.cow_view_all_Page = function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(cow.find());

        case 3:
          thecow = _context3.sent;
          res.render('cow', {
            title: 'cow Search Results',
            results: thecow
          });
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.error(500, "{\"error\": ".concat(_context3.t0, "}"));

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};