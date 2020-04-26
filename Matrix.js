// Add Distance Matrix here
const service = new google.maps.DistanceMatrixService(); // instantiate Distance Matrix service
const matrixOptions = {
    origins: ["Knoxville, TN"], // technician locations
    destinations: ["Charlotte, NC"], // customer address
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
    console.log(response.rows[0].elements[0].distance.text);        
}