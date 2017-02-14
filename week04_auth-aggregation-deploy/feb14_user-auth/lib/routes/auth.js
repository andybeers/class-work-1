const router = require('express').Router();
const bodyParser = require('body-parser').json();
const User = require('../models/user');

function hasUsernameAndPassword(req, res, next) {
    const user = req.body;
    if(!user.username || !user.password) {
        return next({
            code: 400,
            error: 'username and password must be supplied'
        });
    }
    next();
}

router
    .post('/signup', bodyParser, hasUsernameAndPassword, (req, res, next) => {
        const user = req.body;
        
        User.find({ username: user.username }).count()
            .then(count => {
                if(count > 0) throw {
                    code: 400,
                    error: `username ${user.username} already exists`
                };

                return new User(user).save();
            })
            .then(user => {
                res.send({ token: 123 });
            })
            .catch(next);
    })
    .post('/signin', bodyParser, hasUsernameAndPassword, (req, res, next) => {
        const data = req.body;

        User.findOne({ username: data.username })
            .then(user => {
                if(!user || !user.comparePassword(data.password)) {
                    throw {
                        code: 400,
                        error: 'invalid username or password'
                    };
                }

                return user;
            })
            .then(user => {
                res.send({ token: 123 });
            })
            .catch(next);
    });

module.exports = router;