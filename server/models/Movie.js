const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    name: {
        type: String,
        required: 'This field is required'
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: Array,
        required: true
    },
    thumbnail : {
        type: String,
        required: true
    }
});

MovieSchema.index({"$**": 'text'});

module.exports = mongoose.model('Movie', MovieSchema);