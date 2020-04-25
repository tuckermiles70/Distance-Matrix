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

        var GCPkey = MY_KEY;

        var proxy = "https://cors-anywhere.herokuapp.com/";

        Url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + source + "&destinations=" + destinations + "&key=" + GCPkey;

        const Http = new XMLHttpRequest();
        Http.open("GET", Url);
        Http.send();

        Http.onreadystatechange=(e)=>{
            console.log(Http.responseText.destination_addresses[0]);
        }


        // var distance;
        // $.getJSON(Url, function(data){
        //     // var distance = data.rows[0].elements[0].distance.text;
        //     // alert(data.destination_addresses);
        //     alert("success");
        // })

        // alert(distance);

        alert(Url);
      });
});