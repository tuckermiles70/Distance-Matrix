const config = require('./config.json');

var locations = ["Knoxville", "Seymour", "Sevierville"];

var GCPkey = config.MY_KEY;

// console.log(GCPkey);

//Request example:
//https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=YOUR_API_KEY

//HTTP request to get distance and time to locations
sources = ["Knoxville,TN"];
//different destinations must be separated by a pipe
destinations = ["Charlotte,NC|Sevierville,TN|Nashville, TN"];
Url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + sources + "&destinations=" + destinations + "&key=" + GCPkey;

console.log(Url);