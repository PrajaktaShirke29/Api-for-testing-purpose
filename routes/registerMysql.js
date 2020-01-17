const router = require('express').Router();
const register = require('../controller/registerMysql');
const fs = require('fs');
const json2xls = require('json2xls');
var multer = require('multer')
// store excel files into one folder
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
var upload = multer({
    // dest: 'uploads/'
    storage: storage
});

// const jwt = require("jsonwebtoken");
// const id = require("uuid");

/**
 * This api is used to add the data to mysql and create table
 * localhost:4100/mysql/register
 */
router.post('/', (req, res, next) => {
    register.userRegisterMysql(req.body)
        .then((result) => {
            res
                .status(200)
                .json({ message: 'User Resgistrated successfully', result: result });
        })
        .catch((err) => {
            res
                .status(401)
                .json({ message: 'Error occurred while registering user' });
        })
})

/**
 * Add create new user and generate xls
 * localhost:4100/mysql/register/json
 */
router.post('/json', json2xls.middleware, (req, res, next) => {
    register.userRegisterJson(req.body)
        .then((result) => {
            // res.xls('registerUser.xlsx', result);
            res
                .status(200)
                .json({ message: 'User Resgistrated successfully', result: result });
        })
        .catch((err) => {
            res
                .status(401)
                .json({ message: 'Error occurred while registering user', error: err });
        })
})

/**
 * This api is used to accept xls of particular user list and enter data in database
 */
router.post('/xlsx', upload.single('file'), (req, res, next) => {
    try {
        const XLSX = require('xlsx');
        const workbook = XLSX.readFile(req.file.path);
        const sheet_name_list = workbook.SheetNames;
        const registerUserObject = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
        register.userRegisterXlsx(registerUserObject, req.body.api)
            .then((result) => {
                fs.unlink(req.file.path);
                res
                    .status(200)
                    .json({ message: 'User Resgistrated successfully', result: result });
            })
            .catch((err) => {
                res
                    .status(401)
                    .json({ message: 'Error occurred while registering user', error: err });
            })
    } catch (err) {
        res
            .status(401)
            .json({ message: 'Error occurred while registering user', err: err });
    }
})
module.exports = router;