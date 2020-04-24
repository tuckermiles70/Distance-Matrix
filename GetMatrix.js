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

        Url = "https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + source + "&destinations=" + destinations + "&key=" + GCPkey;
        // console.log(Url);

        // const Http = new XMLHttpRequest();
        // Http.open("GET", Url);
        // Http.send();

        // Http.onreadystatechange = (e) => {
        //     console.log(Http.responseText)
        // }


        // var distance;
        // $.getJSON(Url, function(data){
        //     // var distance = data.rows[0].elements[0].distance.text;
        //     // alert(data.destination_addresses);
        //     alert("success");
        // })

        // alert(distance);

        // alert(Url);
      });
});