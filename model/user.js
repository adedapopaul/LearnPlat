var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
	fullName : String,
	email : String,
	pass: String,
	phoneNumber: Number,
	address: String
});

module.exports = mongoose.model('Users',userSchema);
