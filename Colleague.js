var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var colleagueSchema = new Schema({

  empid : { type: Number, required: true}
});

var Colleague = mongoose.model('colleague',colleagueSchema);

module.exports = Colleague;
