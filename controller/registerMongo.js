// const userRegister = (details) => {
//     console.log("registered");
    
// }
const database = require('../lib/connect');
const faker = require('faker');
const utils = require('../lib/util');

const userRegister = (details) => {
    return new Promise ((resolve, reject) => {
        console.log("registered");
        
        database.dbs()
            .then((db) => {
                let dbo = db.db("register");
                
                const data = utils.getDummyData([['firstName', 'middleName', 'lastName'], 'fullAddress']);

                data.forEach(e => {
                    console.log(faker.fake(e));
                })
                resolve()
                // dbo.collection("customers").findOne({})
                // .then((result) => {
                //     console.log(result)
                //     resolve(result);
                // }).catch((err) => {
                //     console.log(err);
                // });
            })
            .catch((err) => {
                console.log(err);
                reject(err);
            })
})}

module.exports = {
    userRegister
}