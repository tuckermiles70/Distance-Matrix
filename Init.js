//https://cloud.google.com/blog/products/maps-platform/how-use-distance-matrix-api
// https://cloud.google.com/blog/products/maps-platform/how-use-distance-matrix-api
// Initialize and add the map
var map;
function initMap(source, destinations) {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 35.9606, lng: -83.9207}
  });

  var origin1 = source;
  var destinationA = destinations;

  // var destinationB = new google.maps.LatLng(50.087692, 14.421150);

  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
  {
      origins: [origin1],
      destinations: [destinationA],
      travelMode: 'DRIVING',
      // transitOptions: TransitOptions,
      // drivingOptions: DrivingOptions,
      // unitSystem: UnitSystem,
      // avoidHighways: Boolean,
      // avoidTolls: Boolean,
  }, callback);
}

function callback(response, status) {
  alert(status);
  if (status == 'OK') {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];
        alert(origins[i] + " to " + destinations[j] + ": " + distance + " " + duration);
      }
    }
  }
}