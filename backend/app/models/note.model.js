const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: String,
    password: String
}, {
    timestamps: true
},
{collection: 'userVerfication'});

const UserSchemaData = mongoose.Schema({
    username: String,
    password: String,
    mail: String,
    url: String,
    gender:String
}, {
    timestamps: true
},
{collection: 'userdata'});

module.exports = mongoose.model('userVerfication', UserSchema);
module.exports = mongoose.model('userdata', UserSchemaData);