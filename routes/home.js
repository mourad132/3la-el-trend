const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

router.get('/', (req, res) => {
    Blog.find({}, (err, blogs) => {
        if(err){
            throw err
        } else {
            res.render('home', { blogs, page: "الصفحة الرئيسية", loggedIn: req.session.loggedIn || false })
        }
    })
});

router.get('/:genre', (req, res) => {
    Blog.find({ genre: req.params.genre }, (err, blogs) => {
        if(err){
            throw err
        } else {
            res.render('home', { blogs, page: req.params.genre, loggedIn: req.session.loggedIn || false})
        }
    })
})

module.exports = router