[![Build Status](https://img.shields.io/travis/DilipKunderu/SEfa17.svg?style=flat-square)](https://travis-ci.org/DilipKunderu/SEfa17)

Sublease Listing Website
##### This is the project detail page

| Issue | Bug Tracker Tool | Sublease Listing |
| ----- | ----- | ----- |
| db |*Structured* | `ElasticSearch` |
| type | **SPA** | multi-page |
| limitation | ~~UX~~ backend calls | **_Map_ _manipulation_** |




BACKEND Code Development - 

1) Clone the repository and go to the /backend folder
2) Run npm install -> This will download all the dependencies
3) Run Node server.js to start the server.
4) Open localhsot:3000 to check if server is up  

Database Code - 

1) Clone the repository and go to the /database folder
2) Run npm install -> This will download all the dependencies
3) Run Node connection.js to setup connection with Elastic cluster.
4) Open http://localhost:9200/ to check if the cluster is set-up.


**Apartment/House sublease ADD API**
----
  This API is used to add or post new sublease apartments.

* **URL**

  http://IP Address:3000/add

* **Method:**
  
     `POST`
  
*  **URL Params**

   URL does not have any parameter.

* **Data Params**

    `{
	"title": "some title",
	"owner": "saptarshi",
	"location": "gainesville, Florida, USA",
	"zipcode": 32608,
	"description": "brief description about the apartment",
	"geolocation" : {
            "lat" : 40.12,
            "lon" : -71.34
    },
	"details": {
		"accomodates": 1,
		"bathrooms": 1,
		"bathroomtype": "private",
		"bedrooms": 2,
		"studio": false,
		"beds": 2,
		"petfriendly": true,
		"propertytype": "private",
		"roomtype": "private room"
	},
	"amenities": {
		"kitchen": true,
		"internet": false,
		"tv": true,
		"essentials": false,
		"shampoo": true,
		"heating": false,
		"airconditioning": true,
		"washer": true,
		"dryer": true,
		"free_parking_on_premises": true,
		"free_parking_on_street": false,
		"paid_parking_off_premises": false,
		"wireless_internet": true,
		"cable_tv": true,
		"family_or_kid_friendly": true,
		"suitable_for_events": false,
		"smoking_allowed": false,
		"wheelchair_accessible": true,
		"elevator": true,
		"indoor_fireplace": false,
		"buzzer_or_wireless_intercom": false,
		"doorman": false,
		"pool": true,
		"hottub": true,
		"gym": true,
		"hangers": true,
		"laptop_friendly_workspace": true,
		"private_entrance": false,
		"window_guards": false,
		"bathtub": true
	},
	"house_roles": ["No smoking",
		"No parties or events",
		"Check in time is 12PM (noon) - 5PM"
	]
}`

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : the identifier of the newly listed apartment }`
 
* **Error Response:**

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Log in" }`

  OR

  * **Code:** 400 BAD REQUEST <br />
    **Content:** `{ error : "JSON Invalid" }`

* **Sample Call:**

    // to be updated
