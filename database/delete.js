var client = require('./connection.js');

client.indices.delete({index: 'housing'},function(err,resp,status) {  
  console.log("delete",resp);
});