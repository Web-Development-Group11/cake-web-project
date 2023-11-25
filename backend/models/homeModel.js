const moongose = require('moongose');
const Schema = moongose.Schema;

const homeSchema = new Schema({
    title: {
        type: String,
        required: true
    }
},{timestamp: true});

module.exports = moongose.model('Home', homeSchema);