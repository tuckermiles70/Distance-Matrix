      //https://cloud.google.com/blog/products/maps-platform/how-use-distance-matrix-api
      // Initialize and add the map
      let map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: {lat: 35.9606, lng: -83.9207}
        });
      
        const cities = [
          {lat: 35.9606, lng: -83.9207}, // Knoxville
        ];
      
        // Loop through cities, adding markers
        for (let i=0; i<cities.length; i++) {
          let position = cities[i]; // location of one city
          // create marker for a city
          let mk = new google.maps.Marker({position: position, map: map});
        }
      }