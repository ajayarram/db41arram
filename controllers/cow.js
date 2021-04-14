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
exports.cow_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await cow.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.cow_delete =async function(req, res) {
        console.log("delete "  + req.params.id)
        try {
            result = await cow.findByIdAndDelete( req.params.id)
            console.log("Removed " + result)
            res.send(result)
        } catch (err) {
            res.status(500)
            res.send(`{"error": Error deleting ${err}}`);
        }
    };
// Handle Cow update form on PUT.
exports.cow_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await cow.findById( req.params.id)
        // Do updates of properties
        if(req.body.cowName) toUpdate.cowName = req.body.cowName;
        if(req.body.habitat) toUpdate.habitat = req.body.habitat;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }

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
   // Handle a show one view with id specified by query
exports.cow_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await cow.findById( req.query.id)
        res.render('cowdetail', 
{ title: 'cow Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.cow_create_Page =  function(req, res) {
    console.log("create view")
    try{
        res.render('cowcreate', { title: 'Cow Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
// Handle building the view for updating a costume.
// query provides the id
exports.cow_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await cow.findById(req.query.id)
        res.render('cowupdate', { title: 'Cow Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.cow_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await cow.findById(req.query.id)
        res.render('cowdelete', { title: 'Cow Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};


