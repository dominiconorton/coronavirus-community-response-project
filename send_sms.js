// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC3ed411ed8bea2e2ba7adaf5fa0f81bfe';
const authToken = '22585d4b17eea2025bf11827f25667cf';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is a coronavirus test bot',
     from: '+441158241239',
     to: '+447946058590'
   })
  .then(message => console.log(message.sid));