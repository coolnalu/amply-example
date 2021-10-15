import * as amply from "amply.js";

amply.setAccessToken("abcd");

//ES6
amply.email.create({
  to: 'test@example.com',
  from: 'test@verifieddomain.com',
  subject: 'My first Amply email!',
  text: 'This is easy',
  html: '<strong>and fun :)</strong>'
}).then(msg => console.log(msg))
  .catch(err => console.log(err.response));

