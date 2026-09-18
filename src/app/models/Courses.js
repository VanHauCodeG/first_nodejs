const mongoose = require('mongoose'); 
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String },
    description: { type: String },
    img: { type: String },
    slug: { type: String, slug: "name", unique: true},
    videoId: { type: String },
},{
    versionKey: false
});

module.exports = mongoose.model('Course', Course);