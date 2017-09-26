var client = require('./connection.js');
var inputfile = require("../backend/test/sample.json");
var bulk_data = [];

var makebulk = function(housingdetailslist,callback){
  for (var detail in housingdetailslist){
    bulk_data.push(
      { index: {_index: 'housing', _type: 'housingdetails', _id: housingdetailslist[detail].id } },
      {
        'title': housingdetailslist[detail].title,
        'owner': housingdetailslist[detail].owner,
        'location': housingdetailslist[detail].location,
        'zipcode': housingdetailslist[detail].zipcode,
        'description': housingdetailslist[detail].description,
        'details': housingdetailslist[detail].details,
        'amenities': housingdetailslist[detail].amenities,
        'house_roles': housingdetailslist[detail].house_roles
      }
    );
  }
  callback(bulk_data);
}

var indexall = function(madebulk,callback) {
  client.bulk({
    maxRetries: 5,
    index: 'housing',
    type: 'housingdetails',
    body: madebulk
  },function(err,resp,status) {
      if (err) {
        console.log(err);
      }
      else {
        callback(resp.items);
      }
  })
}

makebulk(inputfile,function(response){
  console.log("Bulk content prepared");
  indexall(response,function(response){
    console.log(response);
  })
});