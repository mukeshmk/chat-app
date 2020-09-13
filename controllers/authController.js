import jwt from 'jsonwebtoken';

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

const maxAge = 1 * 24 * 60 * 60; // maxAge of 1 day
const createToken = (id) => {
    return jwt.sign({ id }, 'secret!', {
        expiresIn: maxAge
    });
};

module.exports.signup_get = (req, res) => {
    res.render('index');
};

module.exports.login_get = (req, res) => {
    res.render('index');
};

module.exports.signup_post = (req, res) => {
    const { email, password } = req.body;

    User.create({ email, password })
        .then((user) => {
            const token = createToken(user._id);
            res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(201).json({user: user._id});
        })
        .catch((err) => {
            const errors = handleErrors(err);
            res.status(400).json({ errors });
        });
};

module.exports.login_post = (req, res) => {
    const { email, password } = req.body;

    res.send('user login');
};
