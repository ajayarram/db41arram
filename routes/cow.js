var express = require('express');
const cow_controlers= require('../controllers/cow');
var router = express.Router();
/* GET cows */
router.get('/', cow_controlers.cow_view_all_Page );
/* GET detail cow page */
router.get('/detail', cow_controlers.cow_view_one_Page);
/* GET create cow page */
router.get('/create', cow_controlers.cow_create_Page);
/* GET create update page */
router.get('/update', cow_controlers.cow_update_Page);

/* GET create costume page */
router.get('/delete', cow_controlers.cow_delete_Page);





module.exports = router;