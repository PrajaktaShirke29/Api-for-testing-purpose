const database = require('../lib/connect');
const connections = database.connections;
const mysql = require('mysql');

const userRegisterMysql = (details, create, insert) => {
    return new Promise((resolve, reject) => {
        
        database.mysqlDb(create).then(() => {
            const conn = mysql.createConnection(connections);
            // conn.query("INSERT")
            conn.query(insert, [details], (err, result)=> {
                if(err){
                    reject(err);
                }
                resolve(result);
            } )
        }).catch((err) => {
            console.log(err);
            reject(err);
        })
    })
}

module.exports = {
    userRegisterMysql
}