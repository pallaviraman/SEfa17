var elasticclient = require('../config/database.js');
var ObjectId = require("node-time-uuid");

// check if DB is present; if not, create a new DB
var dbstart = function() {
    elasticclient.indices.get({
        index:'housing'
    }, function(err,resp, status) {
        if(status == 200) {
            console.log("Database already exists");
        } else {
            createdb();
        }
    });   
}

// helper function to create new DB
function createdb() {
     elasticclient.indices.create({  
        index: 'housing'
      },function(err,resp,status) {
        if(err) {
          console.log("Unable to create DB");
        }
        else {
          console.log("DB successfully created");
        }
      });
}



var dbinsert = function(req, res, callback) {
    var uuid = new ObjectId();
    elasticclient.index({  
        index: 'housing',
        id: uuid.toString(),
        type: 'lease',
        body: {
            "title": req.body.title,
            "owner": req.body.owner,
            "location": req.body.location,
            "zipcode": req.body.zipcode,
            "description": req.body.description,
            "details": {
                "accomodates": req.body.details.accomodates,
                "bathrooms": req.body.details.bathrooms,
                "bathroomtype": req.body.details.bathroomtype,
                "bedrooms": req.body.details.bedrooms,
                "studio": req.body.details.studio,
                "beds": req.body.details.beds,
                "petfriendly": req.body.details.petfriendly,
                "propertytype": req.body.details.propertytype,
                "roomtype": req.body.details.roomtype
            },
            "amenities": {
                "kitchen": req.body.amenities.kitchen,
                "internet": req.body.amenities.internet,
                "tv": req.body.amenities.tv,
                "essentials": req.body.amenities.essentials,
                "shampoo": req.body.amenities.shampoo,
                "heating": req.body.amenities.heating,
                "airconditioning": req.body.amenities.airconditioning,
                "washer": req.body.amenities.washer,
                "dryer": req.body.amenities.dryer,
                "free_parking_on_premises": req.body.amenities.free_parking_on_premises,
                "free_parking_on_street": req.body.amenities.free_parking_on_street,
                "paid_parking_off_premises": req.body.amenities.free_parking_off_premises,
                "wireless_internet": req.body.amenities.wireless_internet,
                "cable_tv": req.body.amenities.cable_tv,
                "family_or_kid_friendly": req.body.amenities.family_or_kid_friendly,
                "suitable_for_events": req.body.amenities.suitable_for_events,
                "smoking_allowed": req.body.amenities.smoking_allowed,
                "wheelchair_accessible": req.body.amenities.wheelchair_accessible,
                "elevator": req.body.amenities.elevator,
                "indoor_fireplace": req.body.amenities.indoor_fireplace,
                "buzzer_or_wireless_intercom": req.body.amenities.buzzer_or_wireless_intercom,
                "doorman": req.body.amenities.doorman,
                "pool": req.body.amenities.pool,
                "hottub": req.body.amenities.hottub,
                "gym": req.body.amenities.gym,
                "hangers": req.body.amenities.hangers,
                "laptop_friendly_workspace": req.body.amenities.laptop_friendly_workspace,
                "private_entrance": req.body.amenities.private_entrance,
                "window_guards": req.body.amenities.window_guards,
                "bathtub": req.body.amenities.bathtub
            },
            "house_roles": req.body.house_roles
        }
      },function(err,resp,status) {
          console.log(resp);
          callback(err, resp);
      });
}


exports.dbstart = dbstart;
exports.dbinsert = dbinsert;