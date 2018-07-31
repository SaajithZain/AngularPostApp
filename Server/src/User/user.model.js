var mongoose = require('../../config/db');

var userSchema = mongoose.Schema({
    username: { type:String, require:true },
    password: { type:String, require:true }
});

mongoose.model('User', userSchema);

module.exports = mongoose;