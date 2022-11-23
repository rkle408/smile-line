const { Schema, model } = require('mongoose');

const healthSchema = new Schema({
    

});

const Health = model('Health', healthSchema);

module.exports = Health;