const database = require('../lib/connect');
const connections = database.connections;
const mysql = require('mysql');
const Request = require("request");

const userRegisterMysql = (details, create, insert) => {
    return new Promise((resolve, reject) => {

        database.mysqlDb(create).then(() => {
            const conn = mysql.createConnection(connections);
            // conn.query("INSERT")
            conn.query(insert, [details], (err, result) => {
                if (err) {
                    reject(err);
                }
                resolve(result);
            })
        }).catch((err) => {
            console.log(err);
            reject(err);
        })
    })
}

const userRegisterxlsx = (object, api) => {
    return new Promise((resolve, reject) => {
        // call the api
        let option = {
            "headers": { "content-type": "application/json" },
            "url": api,
            "body": JSON.stringify(object)
        }
        Request.post(option, (error, response, body) => {
            if(error) {
                console.dir(error);
                reject(err);
            }
            console.dir(JSON.parse(body));
            resolve(object);
        });  
    })
}

module.exports = {
    userRegisterMysql,
    userRegisterxlsx
}