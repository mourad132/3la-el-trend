const checkCredentials = (req, res, next) => {
    if(req.session.loggedIn){
        return next()
    }
    res.redirect('/')
};

module.exports = checkCredentials;