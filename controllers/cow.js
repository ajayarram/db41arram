var cow = require('../models/cow');
// List of all cows
// List of all cows
exports.cow_list = async function(req, res) {
    try{
    thecow = await cow.find();
    res.send(thecow);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
   };
// for a specific cow.
exports.cow_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: cow detail: ' + req.params.id);
};
// Handle cow create on POST.
exports.cow_create_post = async function(req, res) {
    console.log(req.body)
    let document = new cow();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"cowtype":"goat", "cost":12, "size":"large"}
    document.cowName = req.body.cowName;
    document.habitat = req.body.habitat;
    document.price = req.body.price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
   };
// Handle Cow delete form on DELETE.
exports.cow_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: cow delete DELETE ' + req.params.id);
};
// Handle Cow update form on PUT.
exports.cow_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: cow update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.cow_view_all_Page = async function(req, res) {
    try{
    thecow = await cow.find();
    res.render('cow', { title: 'cow Search Results', results: thecow });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
   };