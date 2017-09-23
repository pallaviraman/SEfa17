var client = require('./connection.js');

client.cluster.health({},function(err,resp,status) {  
  console.log("Connection status",resp);
});