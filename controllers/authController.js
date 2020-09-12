import User from '../models/User';

module.exports.signup_get = (req, res) => {
    res.render('index');
};

module.exports.login_get = (req, res) => {
    res.render('index');
};

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.create({ email, password });
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(400).send('error!!');
    }
};

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    res.send('user login');
};
