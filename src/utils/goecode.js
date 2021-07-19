const request = require('../../node_modules/request');

function geocode (address, callback) {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/$" + encodeURIComponent(address) + ".json?limit=1&access_token=pk.eyJ1IjoiamtyYWoxMzkiLCJhIjoiY2tyMzZjM3ZnMHd2czJ5cW12dXNpZGVjYSJ9.6kOrodJg2vWURCo9dEfR6A";

    request({url, json: true}, (error,{body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (body.features.length == 0) {
            //No location found.
            callback('Unable to find location. Try another search.', undefined);
        } else {
            // Received data; returns array: [Longitude,Latitude];
            callback(undefined,{
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;
