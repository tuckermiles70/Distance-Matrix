var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 35.9606, lng: -83.9207}
  });

  const cities = [
    {lat: 41.88, lng: -87.62}, // Chicago
    {lat: 43.05, lng: -87.95}, // Milwaukee
    {lat: 42.33, lng: -83.04}, // Detroit
    {lat: 39.76, lng: -86.15}, // Indianapolis
    {lat: 38.62, lng: -90.19} // St. Louis
  ];

  // Loop through cities, adding markers
  for (let i=0; i<cities.length; i++) {
    let position = cities[i]; // location of one city
    // create marker for a city
    let mk = new google.maps.Marker({position: position, map: map});
  }

  var result = {};
  // $.each($('form').serializeArray(), function() {
  //     result[this.name] = this.value;
  // });

  var source = document.getElementById('source').value; //result.source.toString();
  // var destinations = result.destinations;

  alert(source);

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
  // Add Distance Matrix here
}

//this is what doesn't work
// export { initMap };