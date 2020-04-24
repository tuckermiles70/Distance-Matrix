const config = require('./config.json');

var GCPkey = config.MY_KEY;

console.log("Enter Source");
// source =

console.log("Enter destinations in format: \"dest1|dest2|dest3|...\"")
// destinations = 

//source and destination 
source = "Knoxville,TN";
destinations = "Charlotte,NC|Sevierville,TN|Nashville, TN";

Url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + sources + "&destinations=" + destinations + "&key=" + GCPkey;

console.log(Url);