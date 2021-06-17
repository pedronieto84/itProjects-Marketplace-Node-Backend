
const express = require('express');
const app = express();
const db = require('./db'); 
var UserController = require('./user/UserController');
// dummi comment
app.use('/users', UserController);
module.exports = app;