var mongoose = require('../../config/db');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    postTitle: {
        type: String,
        require: true
    },
    postDescription: {
        type: String,
        require: true
    }
});

mongoose.model('Post', PostSchema);
module.exports = mongoose;
