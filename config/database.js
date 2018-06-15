var mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb+srv://parsa-dev:G4Ct30j0efVxKXDN@cluster0-znwk6.mongodb.net/development?retryWrites=true')
    .then(() => {
        console.log("DB connected")
    }, err => {
        console.log("DB error")
    }
    );;