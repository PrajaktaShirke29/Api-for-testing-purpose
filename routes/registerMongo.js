const router = require('express').Router();
const register = require('../controller/registerMongo');
// const jwt = require("jsonwebtoken");
// const id = require("uuid");

router.post('/', (req, res, next) => {
    register.userRegister(req.body)
            .then(() => {
                res
                    .status(200)
                    .json({ message: 'User Resgistrated successfully' });
            })
            .catch((err) => {
                res
                    .status(401)
                    .json({ message: 'Error occurred while registering user' });
            })
})

module.exports = router;