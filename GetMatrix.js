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
        console.log(Url);

      });
});