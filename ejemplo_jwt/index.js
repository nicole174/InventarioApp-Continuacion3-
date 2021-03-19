var jwt = require('jsonwebtoken');

var playload={
  userdata:{'email':'joe@doe.com','phone':'5544332211'}
};

const clave = 'dios1234';
const token = jwt.sing(playload, clave, {experesIn: 60 *5});

console.log(token);
