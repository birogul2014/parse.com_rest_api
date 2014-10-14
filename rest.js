var Kaiseki = require('kaiseki');

// instantiate
var APP_ID = 'hSNY3qCUgP6jYeb3dwG53huAGGd8YEHugCAjdgGR';
var REST_API_KEY = '2rkTaxHnBJbKZvJsDmqdl4kHhqTI8QP9rzaFpPDi';
var kaiseki = new Kaiseki(APP_ID, REST_API_KEY);
var userInfo = {
  // required
  username: 'maricris',
  password: 'whew',

  name: 'Maricris',
  gender: 'female',
  nickname: 'Kit'
};
kaiseki.createUser(userInfo, function(err, res, body, success) {
  console.log('user created with session token = ', body.sessionToken);
  console.log('object id = ', body.objectId);
});
