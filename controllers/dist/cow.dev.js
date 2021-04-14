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


exports.cow_detail = function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log("detail" + req.params.id);
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(cow.findById(req.params.id));

        case 4:
          result = _context2.sent;
          res.send(result);
          _context2.next = 12;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](1);
          res.status(500);
          res.send("{\"error\": document for id ".concat(req.params.id, " not found"));

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Handle cow create on POST.


exports.cow_create_post = function _callee3(req, res) {
  var document, _result;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(req.body);
          document = new cow(); // We are looking for a body, since POST does not have query parameters.
          // Even though bodies can be in many different formats, we will be picky
          // and require that it be a json object
          // {"cowtype":"goat", "cost":12, "size":"large"}

          document.cowName = req.body.cowName;
          document.habitat = req.body.habitat;
          document.price = req.body.price;
          _context3.prev = 5;
          _context3.next = 8;
          return regeneratorRuntime.awrap(document.save());

        case 8:
          _result = _context3.sent;
          res.send(_result);
          _context3.next = 15;
          break;

        case 12:
          _context3.prev = 12;
          _context3.t0 = _context3["catch"](5);
          res.error(500, "{\"error\": ".concat(_context3.t0, "}"));

        case 15:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[5, 12]]);
}; // Handle Cow delete form on DELETE.


exports.cow_delete = function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          console.log("delete " + req.params.id);
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(cow.findByIdAndDelete(req.params.id));

        case 4:
          result = _context4.sent;
          console.log("Removed " + result);
          res.send(result);
          _context4.next = 13;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          res.status(500);
          res.send("{\"error\": Error deleting ".concat(_context4.t0, "}"));

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 9]]);
}; // Handle Cow update form on PUT.


exports.cow_update_put = function _callee5(req, res) {
  var toUpdate, _result2;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log("update on id ".concat(req.params.id, " with body ").concat(JSON.stringify(req.body)));
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(cow.findById(req.params.id));

        case 4:
          toUpdate = _context5.sent;
          // Do updates of properties
          if (req.body.cowName) toUpdate.cowName = req.body.cowName;
          if (req.body.habitat) toUpdate.habitat = req.body.habitat;
          if (req.body.price) toUpdate.price = req.body.price;
          _context5.next = 10;
          return regeneratorRuntime.awrap(toUpdate.save());

        case 10:
          _result2 = _context5.sent;
          console.log("Sucess " + _result2);
          res.send(_result2);
          _context5.next = 19;
          break;

        case 15:
          _context5.prev = 15;
          _context5.t0 = _context5["catch"](1);
          res.status(500);
          res.send("{\"error\": ".concat(_context5.t0, ": Update for id ").concat(req.params.id, " failed"));

        case 19:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 15]]);
}; // VIEWS
// Handle a show all view


exports.cow_view_all_Page = function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(cow.find());

        case 3:
          thecow = _context6.sent;
          res.render('cow', {
            title: 'cow Search Results',
            results: thecow
          });
          _context6.next = 10;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          res.error(500, "{\"error\": ".concat(_context6.t0, "}"));

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Handle a show one view with id specified by query


exports.cow_view_one_Page = function _callee7(req, res) {
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          console.log("single view for id " + req.query.id);
          _context7.prev = 1;
          _context7.next = 4;
          return regeneratorRuntime.awrap(cow.findById(req.query.id));

        case 4:
          result = _context7.sent;
          res.render('cowdetail', {
            title: 'cow Detail',
            toShow: result
          });
          _context7.next = 12;
          break;

        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](1);
          res.status(500);
          res.send("{'error': '".concat(_context7.t0, "'}"));

        case 12:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async


exports.cow_create_Page = function (req, res) {
  console.log("create view");

  try {
    res.render('cowcreate', {
      title: 'Cow Create'
    });
  } catch (err) {
    res.status(500);
    res.send("{'error': '".concat(err, "'}"));
  }
}; // Handle building the view for updating a costume.
// query provides the id


exports.cow_update_Page = function _callee8(req, res) {
  var _result3;

  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          console.log("update view for item " + req.query.id);
          _context8.prev = 1;
          _context8.next = 4;
          return regeneratorRuntime.awrap(cow.findById(req.query.id));

        case 4:
          _result3 = _context8.sent;
          res.render('cowupdate', {
            title: 'Cow Update',
            toShow: _result3
          });
          _context8.next = 12;
          break;

        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](1);
          res.status(500);
          res.send("{'error': '".concat(_context8.t0, "'}"));

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[1, 8]]);
}; // Handle a delete one view with id from query


exports.cow_delete_Page = function _callee9(req, res) {
  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          console.log("Delete view for id " + req.query.id);
          _context9.prev = 1;
          _context9.next = 4;
          return regeneratorRuntime.awrap(cow.findById(req.query.id));

        case 4:
          result = _context9.sent;
          res.render('cowdelete', {
            title: 'Cow Delete',
            toShow: result
          });
          _context9.next = 12;
          break;

        case 8:
          _context9.prev = 8;
          _context9.t0 = _context9["catch"](1);
          res.status(500);
          res.send("{'error': '".concat(_context9.t0, "'}"));

        case 12:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[1, 8]]);
};