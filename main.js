//Tucker Miles 2020

import { genpdf } from './pdfgen.js';

$(document).ready(function () {
  $("#button").click(function () {
    console.log("submitted!");

    var source;
    var destinations = [];

    //Pulling source and destinations from inputs upon submission
    source = document.getElementById("source").value;
    destinations[0] = document.getElementById("destination0").value;
    destinations[1] = document.getElementById("destination1").value;
    destinations[2] = document.getElementById("destination2").value;
    destinations[3] = document.getElementById("destination3").value;
    destinations[4] = document.getElementById("destination4").value;
    destinations[5] = document.getElementById("destination5").value;
    destinations[6] = document.getElementById("destination6").value;
    destinations[7] = document.getElementById("destination7").value;


    //console logging for debugging purposes
    console.log("Source:\n" + source);
    console.log("Destinations:");
    var i;
    for (i = 0; i < 8; i++) {
      console.log(destinations[i]);
    }
    console.log(destinations);

    var linkprefix = "https://maps.googleapis.com/maps/api/distancematrix/json?";

    // Must check for units here since it comes in beginning of string
    if (document.getElementById("imperialradio").checked) {
      console.log("imperial units");
      linkprefix += "units=imperial";
    }
    else if (document.getElementById("metricradio").checked) {
      console.log("metric units");
      linkprefix += "units=metric";
    }

    //Set source
    var origin = "&origins=" + source;

    //String manipulation for getting destinations into http request string
    var destinationstring = "&destinations=";
    for (i = 0; i < 8; i++) {
      destinationstring += destinations[i];
      if (i == 7) break;

      if (destinations[i] != "" && destinations[i + 1] != "") {
        destinationstring += "|";
      }
    }

    var mode = "";

    // Check for additional parameters
    if (document.getElementById("drivingradio").checked) {
      console.log("driving mode");
    }
    else if (document.getElementById("walkingradio").checked) {
      console.log("walking mode");
      mode += "&mode=walking";
    }
    else if (document.getElementById("cyclingradio").checked) {
      console.log("cycling mode");
      mode += "&mode=bicycling";
    }

    var avoid = "";

    //Gather avoid options
    // not sure if these need to be separated by "|" or just jave multiple "&..."
    if (document.getElementById("avoidtollscheck").checked) {
      console.log("avoid tolls selected");
      avoid += "&avoid=tolls";
    }
    if (document.getElementById("avoidhighwayscheck").checked) {
      console.log("avoid highways selected");
      avoid += "&avoid=highways";
    }
    if (document.getElementById("avoidferriescheck").checked) {
      console.log("avoid ferries selected");
      avoid += "&avoid=ferries";
    }
    if (document.getElementById("avoidindoorcheck").checked) {
      console.log("avoid indoor selected");
      avoid += "&avoid=indoor";
    }

    var time = "";

    //Generate time since epoch based off of "00:00:00" time format. Whatever time is selected, 
    //the time given to google will be the time since epoch of that selected time of the current day.
    if (document.getElementById("timeinput1").value != "00:00:00") {

      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;

      var date = new Date(today + " " + document.getElementById("timeinput1").value);
      console.log("Departure time selected is " + date);

      // date.getTime() will return time since epoch of today's date and the selected time.
      time += "&departuretime=" + date.getTime();
    }
    else if (document.getElementById("timeinput2").value != "00:00:00") {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();

      today = mm + '/' + dd + '/' + yyyy;

      var date = new Date(today + " " + document.getElementById("timeinput2").value);
      console.log("Departure time selected is " + date);

      //date.getTime() will return time since epoch of today's date and the selected time.
      time += "&arrivaltime=" + date.getTime();
    }

    var key = "&key=" + MY_KEY;

    //Finally, adding all the individual string components together
    var fulllink = linkprefix + origin + destinationstring + mode + avoid + key;

    //Console debugging
    console.log(fulllink);

    //HTTP get request
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // Action to be performed when the document is ready:
        var a = xhttp.responseText;
        a = JSON.parse(a);
        console.log(a);

        //html to show up on submit
        var html = `
          <table id="my-table" class="table table-hover table-bordered m-2">
          <thead>
            <tr>
              <th class="h3">Destination</th>
              <th class="h3">Distance</th>
              <th class="h3">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="h5" id="td0">Destination</td>
              <td class="h5" id="td1">Distance</td>
              <td class="h5" id="td2">Time</td>
            </tr>
            <tr>
              <td class="h5" id="td3">Destination</td>
              <td class="h5" id="td4">Distance</td>
              <td class="h5" id="td5">Time</td>
            </tr>
            <tr>
              <td class="h5" id="td6">Destination</td>
              <td class="h5" id="td7">Distance</td>
              <td class="h5" id="td8">Time</td>
            </tr>
            <tr>
              <td class="h5" id="td9">Destination</td>
              <td class="h5" id="td10">Distance</td>
              <td class="h5" id="td11">Time</td>
            </tr>
            <tr>
              <td class="h5" id="td12">Destination</td>
              <td class="h5" id="td13">Distance</td>
              <td class="h5" id="td14">Time</td>
            </tr>
            <tr>
              <td class="h5" id="td15">Destination</td>
              <td class="h5" id="td16">Distance</td>
              <td class="h5" id="td17">Time</td>
            </tr>
            <tr>
              <td class="h5" id="td18">Destination</td>
              <td class="h5" id="td19">Distance</td>
              <td class="h5" id="td20">Time</td>
            </tr>
            <tr>
              <td class="h5" id="td21">Destination</td>
              <td class="h5" id="td22">Distance</td>
              <td class="h5" id="td23">Time</td>
            </tr>
          </tbody>
        </table>
      </div>
        `;
        document.getElementById("table").innerHTML = html;

         console.log("Origin: " + a.origin_addresses[0]);

        //If there was a destination, then set the fields, otherwise leave at default. Console logging for debugging
        if (destinations[0] != "") {
          document.getElementById("td0").innerHTML = a.destination_addresses[0];
          document.getElementById("td1").innerHTML = a.rows[0].elements[0].distance.text
          document.getElementById("td2").innerHTML = a.rows[0].elements[0].duration.text

          console.log("Distance to " + a.destination_addresses[0] + ": " + a.rows[0].elements[0].distance.text);
          console.log("Time to " + a.destination_addresses[0] + ": " + a.rows[0].elements[0].duration.text);
        }
        if (destinations[1] != "") {
          document.getElementById("td3").innerHTML = a.destination_addresses[1];
          document.getElementById("td4").innerHTML = a.rows[0].elements[1].distance.text
          document.getElementById("td5").innerHTML = a.rows[0].elements[1].duration.text

          console.log("Distance to " + a.destination_addresses[1] + ": " + a.rows[0].elements[1].distance.text);
          console.log("Time to " + a.destination_addresses[1] + ": " + a.rows[0].elements[1].duration.text);
        }
        if (destinations[2] != "") {
          document.getElementById("td6").innerHTML = a.destination_addresses[2];
          document.getElementById("td7").innerHTML = a.rows[0].elements[2].distance.text
          document.getElementById("td8").innerHTML = a.rows[0].elements[2].duration.text

          console.log("Distance to " + a.destination_addresses[2] + ": " + a.rows[0].elements[2].distance.text);
          console.log("Time to " + a.destination_addresses[2] + ": " + a.rows[0].elements[2].duration.text);
        }
        if (destinations[3] != "") {
          document.getElementById("td9").innerHTML = a.destination_addresses[3];
          document.getElementById("td10").innerHTML = a.rows[0].elements[3].distance.text
          document.getElementById("td11").innerHTML = a.rows[0].elements[3].duration.text

          console.log("Distance to " + a.destination_addresses[3] + ": " + a.rows[0].elements[3].distance.text);
          console.log("Time to " + a.destination_addresses[3] + ": " + a.rows[0].elements[3].duration.text);
        }
        if (destinations[4] != "") {
          document.getElementById("td12").innerHTML = a.destination_addresses[4];
          document.getElementById("td13").innerHTML = a.rows[0].elements[4].distance.text
          document.getElementById("td14").innerHTML = a.rows[0].elements[4].duration.text

          console.log("Distance to " + a.destination_addresses[4] + ": " + a.rows[0].elements[4].distance.text);
          console.log("Time to " + a.destination_addresses[4] + ": " + a.rows[0].elements[4].duration.text);
        }
        if (destinations[5] != "") {
          document.getElementById("td15").innerHTML = a.destination_addresses[5];
          document.getElementById("td16").innerHTML = a.rows[0].elements[5].distance.text
          document.getElementById("td17").innerHTML = a.rows[0].elements[5].duration.text

          console.log("Distance to " + a.destination_addresses[5] + ": " + a.rows[0].elements[5].distance.text);
          console.log("Time to " + a.destination_addresses[5] + ": " + a.rows[0].elements[5].duration.text);
        }
        if (destinations[6] != "") {
          document.getElementById("td18").innerHTML = a.destination_addresses[6];
          document.getElementById("td19").innerHTML = a.rows[0].elements[6].distance.text
          document.getElementById("td20").innerHTML = a.rows[0].elements[6].duration.text

          console.log("Distance to " + a.destination_addresses[6] + ": " + a.rows[0].elements[6].distance.text);
          console.log("Time to " + a.destination_addresses[6] + ": " + a.rows[0].elements[6].duration.text);
        }
        if (destinations[7] != "") {
          document.getElementById("td21").innerHTML = a.destination_addresses[7];
          document.getElementById("td22").innerHTML = a.rows[0].elements[7].distance.text
          document.getElementById("td23").innerHTML = a.rows[0].elements[7].duration.text

          console.log("Distance to " + a.destination_addresses[7] + ": " + a.rows[0].elements[7].distance.text);
          console.log("Time to " + a.destination_addresses[7] + ": " + a.rows[0].elements[7].duration.text);
        }

        console.log("calling genpdf()");
        genpdf();
      }
    };
    //false to make this synchronous
    //just using chrome plugin to temporarily fix cors issues.
    xhttp.open("GET", fulllink, false);
    xhttp.send();
  });
});