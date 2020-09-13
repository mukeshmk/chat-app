import jwt from 'jsonwebtoken';
import config from '../config';

export default (req, res, next) => {
    const token = req.cookies.jwt;

    // check if jwt exits and is verified
    if(token) {
        jwt.verify(token, config.secret, (err, decodedToken) => {
            if(err) {
                console.error(err.message);
                res.redirect('/login');
            } else {
                console.info(decodedToken);
                next();
            }
        });
    } else {
        res.redirect('/login');
    }
};
