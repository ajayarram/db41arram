"use strict";

var express = require('express');

var cow_controlers = require('../controllers/cow');

var router = express.Router();
/* GET cows */

router.get('/', cow_controlers.cow_view_all_Page);
module.exports = router;