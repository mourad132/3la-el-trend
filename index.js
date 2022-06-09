const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const session = require('express-session');

mongoose.connect("mongodb+srv://mourad132:Momo2005@3la-el-trend.rw3ugof.mongodb.net/?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true })

// ######### ROUTES #########
const admin = require('./routes/admin');
const home = require('./routes/home');
const show = require('./routes/show');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: "thisisasecret"
}));

// ######## ROUTES #########
app.use('/show', show)
app.use('/admin', admin);
app.use('/', home);

app.listen(process.env.PORT || 80, () => {
    console.log('serving at port 3000')
});
