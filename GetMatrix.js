const config = require('./config.js');

var locations = ["Knoxville", "Seymour", "Sevierville"];

var GCPkey = config.MY_KEY;

console.log(GCPkey);

//Request example:
//https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=YOUR_API_KEY

//HTTP request to get distance and time to locations
Url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=1105BridgeAvenue,Knoxville%20Tennessee&destinations=3039DawsonWay,Kodak,TN&key=" + GCPkey;

// console.log(Url);