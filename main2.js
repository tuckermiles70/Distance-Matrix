//Spent forever attempting to make multiple calls to the API using the JS library, endless issues for me. Decided to switch to HTTP so I can move forward.

//Great for testing: "http://api.plos.org/search?q=title:DNA"

$(document).ready(function () {
  $("#button").click(function () {
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
    for (i = 0; i < 4; i++) {
      console.log(destinations[i]);
    }

    var linkprefix = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial";

    var origin = "&origins=" + source;

    var destinationstring = "&destinations=";
    for (i = 0; i < 4; i++) {
      destinationstring += destinations[i];
      if (i != 4 - 1) {
        destinationstring += "|";
      }
    }

    var key = "&key=" + MY_KEY;
    var fulllink = linkprefix + origin + destinationstring + key;

    console.log(fulllink);

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        // document.getElementById("demo").innerHTML = xhttp.responseText;
        var a = xhttp.responseText;
        a = JSON.parse(a);

        
    
        //wonderful interpolation... :)
        var inner = `
          Origin:  ${a.origin_addresses[0]} <br> <br>

          Distance to ${a.destination_addresses[0]}:  ${a.rows[0].elements[0].distance.text} <br>
          Time to  ${a.destination_addresses[0]}:  ${a.rows[0].elements[0].duration.text} <br> <br>

          Distance to ${a.destination_addresses[1]}: ${a.rows[0].elements[1].distance.text} <br>
          Time to ${a.destination_addresses[1]}: ${a.rows[0].elements[1].duration.text} <br> <br>

          Distance to ${a.destination_addresses[2]}: ${a.rows[0].elements[2].distance.text} <br>
          Time to ${a.destination_addresses[2]}: ${a.rows[0].elements[2].duration.text} <br> <br>

          Distance to ${a.destination_addresses[3]}: ${a.rows[0].elements[3].distance.text} <br>
          Time to ${a.destination_addresses[3]}: ${a.rows[0].elements[3].duration.text} <br> <br>
        `
        document.getElementById("outputtext").innerHTML = inner;


        console.log("Origin: " + a.origin_addresses[0]);

        console.log("Distance to " + a.destination_addresses[0] + ": " + a.rows[0].elements[0].distance.text);
        console.log("Time to " + a.destination_addresses[0] + ": " + a.rows[0].elements[0].duration.text);

        console.log("Distance to " + a.destination_addresses[1] + ": " + a.rows[0].elements[1].distance.text);
        console.log("Time to " + a.destination_addresses[1] + ": " + a.rows[0].elements[1].duration.text);

        console.log("Distance to " + a.destination_addresses[2] + ": " + a.rows[0].elements[2].distance.text);
        console.log("Time to " + a.destination_addresses[2] + ": " + a.rows[0].elements[2].duration.text);

        console.log("Distance to " + a.destination_addresses[3] + ": " + a.rows[0].elements[3].distance.text);
        console.log("Time to " + a.destination_addresses[3] + ": " + a.rows[0].elements[3].duration.text);
      }
    };
    //false to make this synchronous
    //just using chomre plugin to temporarily fix cors issues.
    xhttp.open("GET", fulllink, false);
    xhttp.send();
  });
});