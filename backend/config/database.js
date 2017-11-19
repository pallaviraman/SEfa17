// config/database.js


var elasticsearch = require('elasticsearch');
var config = require('./config.json');

var elasticclient = new elasticsearch.Client({
    hosts: [
        config.hostip+":"+config.port
    ]
});

module.exports = elasticclient;
module.exports = {

    'url' : 'mongodb://localhost/passport' // looks like mongodb://<user>:<pass>@mongo.onmodulus.net:27017/Mikha4ot

};
