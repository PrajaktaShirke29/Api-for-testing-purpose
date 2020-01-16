const mongodb = require('mongodb').MongoClient;
const mysql = require('mysql');
const connections = {
    host: "localhost",
    user: "root",
    password: "Test_1234",
    database: "register"
};

const dbs = () => {
    return new Promise((resolve, reject) => {
        mongodb.connect('mongodb://localhost:27017/registration')
            .then((db) => {
                console.log("Connected to Mongodb !!!!");
                let dbo = db.db("register");
                dbo.createCollection("customers");
                resolve(db)
            }).catch((err) => {
                console.log(err);
                reject(err);
            });
    })
}

const mysqlDb = (fields) => {
    return new Promise((resolve, reject) => {
        try {
            let connection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "Test_1234"
            });

            connection.query("CREATE DATABASE register", (err, result) => {
                if (err) {
                    console.log('Database already exists');
                }
                connection.end();
                let conn = mysql.createConnection({
                    host: "localhost",
                    user: "root",
                    password: "Test_1234",
                    database: "register"
                });
                
                conn.query(fields, (err, result) => {
                    if (err) {
                        console.log('Table already exists');
                    }
                })
                conn.end();
            })
            resolve();
        } catch (error) {
            reject(error);
        }
    })
}
module.exports = {
    dbs,
    mysqlDb,
    connections
}