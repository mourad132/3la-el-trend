const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog')

router.get('/:id', (req, res) => {
    //Seach DB For "Id"
    Blog.findById(req.params.id, (err, blog) => {
        if(err){
            throw err
        } else {
            res.render('show', { blog })
        }
    })
});

module.exports = router;