const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    username: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company'
    }
});

module.exports = mongoose.model('User', userSchema);