const faker = require('faker');
const utils = require('../lib/util');
const modelMysql = require('../models/registerMysql')
const userRegisterMysql = (details) => {
    return new Promise((resolve, reject) => {
        try {

            console.log("registered");

            let multiUserData = [];
            for (let i = 0; i < details.numberOfUser; i++) {
                let singleEntryData = [];
                let dummyData = utils.getDummyData(details.fields);
                dummyData.forEach(e => {
                    singleEntryData.push(faker.fake(e));
                })
                multiUserData.push(singleEntryData);
            }
            let fields = details.fields;
            let data = (fields.join()).split(',');
            let arr = [];
            let arrInsert = [];
            data.forEach(element => {
                arr.push(element.concat(' varchar(225) DEFAULT NULL '));
                arrInsert.push(element);
            });
            let colData = arr.join();
            let colInsert = arrInsert.join();
            let createTable = ('CREATE TABLE user (').concat(`${colData})`);
            let insertTable = ('INSERT INTO user (').concat(`${colInsert}) VALUES ?`);
            modelMysql.userRegisterMysql(multiUserData, createTable, insertTable)
                .then((res) => {
                    console.log(res);
                    resolve();
                }).catch((err) => {
                    reject(err);
                })
            resolve();
        } catch (err) {
            reject(err)
        }
    })

}

module.exports = {
    userRegisterMysql
}