import jwt from 'jsonwebtoken';
import config from '../config';
import User from '../models/User';

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;

    // check if jwt exits and is verified
    if(token) {
        jwt.verify(token, config.secret, (err, decodedToken) => {
            if(err) {
                console.error(err.message);
                res.redirect('/login');
            } else {
                //console.info(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
};

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;

    if(token) {
        jwt.verify(token, config.secret, async (err, decodedToken) => {
            if(err) {
                console.error(err.message);
                res.locals.user = null;
                next();
            } else {
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
};

module.exports = { requireAuth, checkUser };