var express = require('express');
const cow_controlers= require('../controllers/cow');
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
var router = express.Router();
/* GET cows */
router.get('/', cow_controlers.cow_view_all_Page );
/* GET detail cow page */
router.get('/detail', cow_controlers.cow_view_one_Page);
/* GET create cow page */
router.get('/create',secured, cow_controlers.cow_create_Page);
/* GET create update page */
router.get('/update',secured, cow_controlers.cow_update_Page);

/* GET create costume page */
router.get('/delete',secured , cow_controlers.cow_delete_Page);





module.exports = router;