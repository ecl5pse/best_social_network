const findUserByEmail = require('../authentication/findUserByEmail');
const comparePassword = require('../authentication/comparePassword.js');
const loginByEmail = require('../authentication/loginByEmail');



module.exports = {
  comparePassword,
  findUserByEmail,
  loginByEmail,

};