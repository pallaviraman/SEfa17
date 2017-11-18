'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const app = require('../server.js'); // Our app
var should = require('should'),
supertest = require('supertest');

var request = supertest('localhost:3000');

describe('lease metadata upload', function() {
  it('file upload', function(done) {
    request.post('/leasemetadata')
            .attach('image', './test/1.png')
            .field('rent','500')
            .field('searchid','1234')
            .field('lat','45')
            .field('lon','90')
            .field('startdate','2017-11')
            .field('enddate','2018-05')
            .then(function(res) {
              console.log(res.body);
              done();
            });
  });
});

describe('API endpoints', function() {

  // GET - From the default path to test the basic test case
  it('should return the welcome message ', function() {
    return chai.request(app)
      .get('/')
      .then(function(res) {
        //console.log(res.body.results)
        expect(res).to.have.status(200);
        expect(res.body.results).equal("Hello Gator Housing");
      });
  });

  // GET - Invalid path to test negative test case
  it('should return Not Found', function() {
    return chai.request(app)
      .get('/INVALID_PATH')
      .then(function(res) {
        throw new Error('Path exists!');
      })
      .catch(function(err) {
        expect(err).to.have.status(404);
      });
  });

  //59c949b3008f052792a09032000002
  /*var leaseMetadataid;
  it('Lease metadata POST API test-1', function() {
    return chai.request(app)
      .post('/leasemetadata')
      .type('form')
      //.attach('avatar',fs.readFileSync('avatar.png'), 'avatar.png')
      .send(
        {
          "searchid": 7834,
          "title":"some title",
          "rent":"$50",
          "lat" : 41.12,
          "lon" : -70.34
        }
      ).then(function(res) {
        id = res.body._id;
        console.log(id);
        expect(res).to.have.status(200);
      });
  });*/

  var id;
  it('POST API test-1', function() {
    return chai.request(app)
      .post('/add')
      .send(
        {
          "owner": "saptarshi",
          "location": "gainesville, Florida, USA",
          "zipcode": 32608,
          "description": "brief description about the apartment",
            "accomodates": 1,
            "bathrooms": 1,
            "bathroomtype": "private",
            "bedrooms": 2,
            "studio": false,
            "beds": 2,
            "petfriendly": true,
            "roomtype": "private room",
            "kitchen": true,
            "internet": false,
            "tv": true,
            "heating": false,
            "airconditioning": true,
            "washer_dryer": true,
            "free_parking_on_premises": true,
            "free_parking_on_street": false,
            "wireless_internet": true,
            "suitable_for_events": false,
            "smoking_allowed": false,
            "wheelchair_accessible": true,
            "elevator": true,
            "pool": true,
            "gym": true,
            "bathtub": true
        }
    )
      .then(function(res) {
        id = res.body._id;
        expect(res).to.have.status(200);
      });
  });


  it('JSON in POST API test-2', function() {
    var newid;
   return chai.request(app)
      .post('/add')
      .send(
        {
          "owner": "saptarshi",
          "location": "gainesville, Florida, USA",
          "zipcode": 32608,
          "description": "brief description about the apartment",
            "accomodates": 1,
            "bathrooms": 1,
            "bathroomtype": "private",
            "bedrooms": 2,
            "studio": false,
            "beds": 2,
            "petfriendly": true,
            "roomtype": "private room",
            "kitchen": true,
            "internet": false,
            "tv": true,
            "heating": false,
            "airconditioning": true,
            "washer_dryer": true,
            "free_parking_on_premises": true,
            "free_parking_on_street": false,
            "wireless_internet": true,
            "suitable_for_events": false,
            "smoking_allowed": false,
            "wheelchair_accessible": true,
            "elevator": true,
            "pool": true,
            "gym": true,
            "bathtub": true
        }
    ).then(function(res) {
        newid = res.body._id;
        expect(res).to.have.status(200);
        chai.request(app)
        .delete('/delete_id?id='+newid)
        .then(function(res) {
          expect(res).to.have.status(200);
        });
       
      });
  });

  it('should return all the lease metadata content', function() {
    return chai.request(app)
      .get('/leasemetadata')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });

  it('should return all the elemets matching the particular filters', function() {
    return chai.request(app)
      .get('/mulfilters')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });

  it('should return all the elemets within specific radius of a point', function() {
    return chai.request(app)
      .get('/geosearch?lat=40&lon=79')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });

  it('should return all the elemets within specific price range', function() {
    return chai.request(app)
      .get('/price?min=650&max=800')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });

  it('should return all the elemets within specific date range', function() {
    return chai.request(app)
      .get('/date?min=2017-10&max=2018-05')
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });

  it('should return content for the particular id', function() {
    return chai.request(app)
      .get('/get_id?id='+id)
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res.body._id).equal(id);
      });
  });

  it('invalid GET request for the particular id', function() {
    return chai.request(app)
      .get('/get_id?id=59c949b3008f052792a09032000003')
      .catch(function(err) {
        expect(err).to.have.status(400);
      });
  });

  it('invalid GET request assertion for the particular id', function() {
    return chai.request(app)
      .get('/get_id?id='+id)
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res.body._id).to.be.not.equal('59c949b3008f052792a09032000003');
      });
  });

  it('should return all content', function() {
    return chai.request(app)
      .get('/get')
      .then(function(res) {
        expect(res).to.have.status(200);
        expect(res.body.hits.total).to.be.greaterThan(0);
      });
  });

  it('DELETE API with specific id', function() {
    return chai.request(app)
      .delete('/delete_id?id='+id)
      .then(function(res) {
        expect(res).to.have.status(200);
      });
  });

  it('DELETE API with invaild id', function() {
    return chai.request(app)
      .delete('/delete_id?id=abcd')
      .catch(function(err) {
        expect(err).to.have.status(400);
      });
  });


  /*it('should return no elemets matching the particular filters', function() {
      return chai.request(app)
      .get('/mulfilters')
      .then(function(res) {
        expect(res).to.have.status(200);
       // expect(res.body.hits.total).to.be.equal(0);
      });
  });
*/


});
