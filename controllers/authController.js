module.exports.signup_get = (req, res) => {
    res.render('index');
};

module.exports.login_get = (req, res) => {
    res.render('index');
};

module.exports.signup_post = (req, res) => {
    res.send('new signup');
};

module.exports.login_post = (req, res) => {
    res.send('user login');
};
