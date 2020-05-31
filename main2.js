//Spent forever attempting to make multiple calls to the API using the JS library, endless issues for me. Decided to switch to HTTP so I can move forward.

//Great for testing: "http://api.plos.org/search?q=title:DNA"

$(document).ready(function () {
  $("form").on("submit", function () {
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

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        // document.getElementById("demo").innerHTML = xhttp.responseText;
        console.log(xhttp.responseText);
      }
    };
    //false to make this synchronous
    //just using chomre plugin to temporarily fix cors issues.
    xhttp.open("GET", fulllink, false);
    xhttp.send();
  });
});