$(document).ready(function() {
    $( "form" ).on( "submit", function() {
        console.log("Form submitted!");

        var result = {};
        $.each($('form').serializeArray(), function() {
            result[this.name] = this.value;
        });

        const service = new google.maps.DistanceMatrixService(); // instantiate Distance Matrix service
        const matrixOptions = {
          origins: ["Sevierville, TN"],
          destinations: ["Knoxville, TN"],
          travelMode: 'DRIVING',
          unitSystem: google.maps.UnitSystem.IMPERIAL
        };
      
        // Call Distance Matrix service
        service.getDistanceMatrix(matrixOptions, callback);
      
        // Callback function used to process Distance Matrix response
        function callback(response, status) {
          if (status !== "OK") {
            alert("Error with distance matrix");
            return;
          }
          console.log(response);        
        }

        // initMap();
    });
});