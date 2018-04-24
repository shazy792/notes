const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const config = require('../config/db');

mongoose.connect(config.database);

// Schema defines how the user data will be stored in MongoDB
const noteSchema = new Schema({
  note: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
});

// module.exports = restful.model('notes', noteSchema).methods(['get', 'post', 'put', 'delete']);
module.exports = mongoose.model('notes', noteSchema);
