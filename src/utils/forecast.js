const request = require('../../node_modules/request');


function forecast (latitude,longitude, callback) {
    const url = "http://api.weatherstack.com/current?access_key=d7a967e1a2216f210eae8515d49c24d3&query=" + latitude + ","+ longitude;
    request({url, json: true}, (error,{body}) => {
        if (error) {
            callback('Unable to connect to location services', undefined);
        } else if (body.error) {
            callback('Unable to find location. Try another search.', undefined);
        } else {
            const current = body.current;
            callback(undefined, "The Current temperature is " + current.temperature + ". The current forecast is " + current.weather_descriptions[0] + ". It feels like " + current.feelslike + ".");

        }
    });
}

module.exports = forecast;