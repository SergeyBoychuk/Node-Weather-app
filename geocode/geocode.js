const request = require('request');

var geocodeAddress =  (address, callback) => {
  let addressFiltered = encodeURIComponent(address);


  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${addressFiltered}`,
    json: true
  }, (err, res, body) => {
    if(err) {
      callback('Unable to connect to google servers');
    } else if(body.status === 'ZERO_RESULTS') {
      callback('unable to find that address');
    } else if(body.status === 'OK') {
      callback(undefined , {
        address: body.results[0].formatted_address,
        lat: body.results[0].geometry.location.lat,
        lng: body.results[0].geometry.location.lng
      });
      
    }
  });
};

module.exports.geocodeAddress = geocodeAddress
