const checkAuth = (req, res, next) => {

    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send('No token, access denied');
    }

    next();
};

module.exports = checkAuth;