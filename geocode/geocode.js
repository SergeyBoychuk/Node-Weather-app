const request = require('request');

var geocodeAddress =  (address) => {
  let addressFiltered = encodeURIComponent(address);


  request({
    url: `http://maps.googleapis.com/maps/api/geocode/json?address=${addressFiltered}`,
    json: true
  }, (err, res, body) => {
    if(err) {
      console.log('unable to connect to google servers');
    } else if(body.status === 'ZERO_RESULTS') {
      console.log('unable to find that address');
    } else if(body.status === 'OK') {
      console.log(JSON.stringify(body.results[0].geometry.location.lat, undefined , 2));
      console.log(JSON.stringify(body.results[0].geometry.location.lng, undefined , 2));
      console.log(JSON.stringify(body.results[0].formatted_address, undefined , 2));
    }
  });
};

module.exports.geocodeAddress = geocodeAddress
