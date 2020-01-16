const router = require('express').Router();
const register = require('../controller/registerMysql');
// const jwt = require("jsonwebtoken");
// const id = require("uuid");

router.post('/', (req, res, next) => {
    register.userRegisterMysql(req.body)
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