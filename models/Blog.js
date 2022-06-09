const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: String,
    body: String,
    date: String,
    genre: String,
    image: String,
});

module.exports = mongoose.model('Blog', blogSchema);