const mongoose = require('mongoose');  
const UserSchema = new mongoose.Schema({  
  id: String,
  email: String,
  password: String,
  name: String,
  verified: Boolean,
  projectsPublished: [String]
});
mongoose.model('User', UserSchema);
module.exports = mongoose.model('User');