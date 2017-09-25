const express = require('express')
const router = express.Router();
var dbHelper = require('./databasehelper.js');

// the default route to check if API request is reaching this file
router.get("/", function (req, res) {
    return res.status(200).send({
        results:"Hello Gator Housing"});
});

// POST API to add new entries to database
router.post("/add", function (req, res) {
    console.log("Accepting POST request");
    dbHelper.dbinsert(req, res, function (err, result) {
        if (err)
            return res.status(400).send("Not added");
        else
            return res.status(200).send("Added");
    });
});

// GET API to get entries from database
router.get("/get", function (req, res) {
    console.log("Accepting GET request");
    dbHelper.dbget(req, res, function (err, result) {
	    if (err)
            return res.status(400).send("Cannot obtain data");
		else
		{
			/*if (result) {
				res.render('index',{
					items : result
				}); 
			}*/
			return res.status(200).send(result);
		}
    });
});

// GET API to get entries with a specific id from database
router.get("/get_id", function (req, res) {
    console.log("Accepting GET request with specific id"+ req.query.id);
    dbHelper.dbget_id(req.query.id,req, res, function (err, result) {
	    if (err)
            return res.status(400).send("Cannot obtain data specific to an id");
		else
			return res.status(200).send(result);
		
    });
});

// DELETE API to delete the database
router.post("/delete", function (req, res) {
    console.log("Accepting DELETE request");
    dbHelper.dbdelete(req, res, function (err, result) {
        if (err)
            return res.status(400).send("Not deleted");
        else
            return res.status(200).send("Deleted");
    });
});

// DELETE API to delete the database with a specific id
router.delete("/delete_id", function (req, res) {
    console.log("Accepting DELETE request with a specific id");
    dbHelper.dbdelete_id(req.query.id, res, function (err, result) {
        if (err)
            return res.status(400).send("Not deleted");
        else
            return res.status(200).send("Deleted");
    });
});


// expose to other modules
module.exports = router;
