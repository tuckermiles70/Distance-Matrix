// const config = require('./config.json');

$(document).ready(function() {
    $( "form" ).on( "submit", function() {
        console.log("Form submitted!");

        var result = {};
        $.each($('form').serializeArray(), function() {
            result[this.name] = this.value;
        });

        var source = result.source;
        var destinations = result.destinations;

        console.log(source);
        console.log(destinations);
      });
});

// var GCPkey = MY_KEY;

// console.log("Enter Source");
// // source =

// console.log("Enter destinations in format: \"dest1|dest2|dest3|...\"")
// // destinations = 

// //source and destination 
// source = "Knoxville,TN";
// destinations = "Charlotte,NC|Sevierville,TN|Nashville, TN";

// // Url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + sources + "&destinations=" + destinations + "&key=" + GCPkey;

// // console.log(Url);