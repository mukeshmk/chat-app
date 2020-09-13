import User from '../models/User';

const handleErrors = (err) => {
    let errors = { email: '', password: '' };

    // dulicate error
    if (err.code === 11000) {
        errors.email = 'that email is already registered';
        return errors;
    }

    // validation error
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
};

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
        const error = handleErrors(err);
        res.status(400).json(error);
    }
};

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;

    res.send('user login');
};
