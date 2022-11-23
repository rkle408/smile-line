const { Schema, model } = require('mongoose');

const healthSchema = new Schema({
    // health history questions here?
    
});

const Health = model('Health', healthSchema);

module.exports = Health;