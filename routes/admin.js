const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');
const loggedIn = require('../middlewares/admin')

router.get('/new', loggedIn, (req, res) => {
    res.render('new', { blog: [] })
})

router.post('/new', loggedIn, (req, res) => {
    var { title, body, genre, image } = req.body
    if(image == ""){
        image = "Logo.png"
    }
    Blog.create({
        title,
        body,
        genre,
        image,
    }, (err, found) => {
        if(err){
            throw err
        }
        res.redirect(`/show/${found._id}`)
    })
});

router.get('/login', (req, res) => {
    res.render('login')
});

router.post('/login', (req, res) => {
    if(req.body.password == "password"){
        req.session.loggedIn = true;
    }
    res.redirect('/')
})

router.get('/edit/:id', loggedIn, (req, res) => {
    Blog.findById(req.params.id, (err, blog) => {
        if(err){
            throw err
        } else {
            res.render('edit', { blog })
        }
    })
})

router.put('/edit/:id', loggedIn, (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, (err, blog) => {
        if(err){
            throw err
        } else {
            res.redirect(`/show/${blog._id}`)
        }
    })
});

router.get('/delete/:id', loggedIn, (req, res) => {
    Blog.findByIdAndDelete(req.params.id, (err, found) => {
        if(err){
            throw err
        } else {
            res.redirect('/')
        }
    })
})

module.exports = router