$(document).ready(function() {
    $( "form" ).on( "submit", function() {
        console.log("Form submitted!");

        var result = {};
        $.each($('form').serializeArray(), function() {
            result[this.name] = this.value;
        });

        var source = result.source;
        var destinations = result.destinations;

        //sort of kind of works??
        initMap("Knoxville, TN", "Sevierville, TN");
    });
});