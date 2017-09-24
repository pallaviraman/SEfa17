var elasticsearch = require('elasticsearch')

var elasticclient = new elasticsearch.client({
    hosts: [
        'https://localhost:9200'
    ]
});

module.exports = elasticclient;