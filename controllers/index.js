const index_get = (req, res) => {
    res.render('index');
};

const chat_get = (req, res) => {
    res.render('index');
};

const user_get = (req, res) => {
    res.status(200).json({user: res.locals.user});
};

export default {
    index_get,
    chat_get,
    user_get
};
