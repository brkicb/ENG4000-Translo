const twilio = require('twilio');

const accountSid = 'ACaa7e3cfcc40327edbd3d79a0ced8bc71';
const authToken = 'f7dcb6affb3c5b2065d78f746bbfed47';

module.exports = new twilio.Twilio(accountSid, authToken);
