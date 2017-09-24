var elasticsearch = require('elasticsearch');
var config = require('./config.json');

var elasticclient = new elasticsearch.Client({
    hosts: [
        //'localhost:9200'
        config.hostip+":"+config.port
    ]
});

module.exports = elasticclient;