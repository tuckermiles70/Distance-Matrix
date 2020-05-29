
//Spent forever attempting to make multiple calls to the API using the JS library, endless issues for me. Decided to switch to HTTP so I can move forward.
$(document).ready(function() {
  $( "form" ).on( "submit", function() {
    console.log("submitted!");

    var source;
    var destinations = [];
    source = document.getElementById("source").value;
    destinations[0] = document.getElementById("destination0").value;
    destinations[1] = document.getElementById("destination1").value; 
    destinations[2] = document.getElementById("destination2").value; 
    destinations[3] = document.getElementById("destination3").value;

    console.log("Source:\n" + source);

    console.log("Destinations:");
    for (i = 0; i < destinations.length; i++) {
      console.log(destinations[i]);
    }

    console.log("https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=Washington,DC&destinations=New+York+City,NY&key=" + MY_KEY);


  });
});