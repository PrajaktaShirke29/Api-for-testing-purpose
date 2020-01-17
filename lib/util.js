const dataD = require('./config');
const faker = require('faker');

const fakerData = (key, value, element) => {
    if (key === element) {
        return value;
    } else if (typeof (key) == "string" && key.includes(element) && typeof (value) == "string" && value.includes(element)) {
        return value;
    }
    return;
}

const getDummyData = (details) => {
    try {
        let dummyData = dataD.dummyData;
        let data = [];
        let obj = {};

        // detail.forEach(element => {
        //     if (Array.isArray(element)) {

        //     }
        //     if (element.includes(".")) {
        //         var index = element.indexOf(".");
        //         // var id = element.substr(0, index);
        //         var text = element.substr(index + 1);
        //         details.push(text);
        //     } else {
        //         details.push(element)
        //     }

        // });
        /**
         * fetch the parameter with the config file of db
         */
        JSON.parse(JSON.stringify(dummyData), (key, value) => {
            for (let i in details) {
                if (Array.isArray(details[i])) {
                    let dummyDetails;
                    for (let j in details[i]) {
                        if (details[i][j].includes(".")) {
                            var index = details[i][j].indexOf(".");
                            var text = details[i][j].substr(index + 1);
                            dummyDetails = fakerData(key, value, text)
                        } else {
                            dummyDetails = fakerData(key, value, details[i][j])
                        }
                        if (dummyDetails) {
                            data.push(dummyDetails);
                        }
                    }
                } else {
                    let dummyData;
                    if (details[i].includes(".")) {
                        var index = details[i].indexOf(".");
                        var text = details[i].substr(index + 1);
                        dummyData = fakerData(key, value, text)
                    } else {
                        dummyData = fakerData(key, value, details[i])
                    }
                    if (dummyData) {
                        data.push(dummyData);
                    }
                }
            }
        });
        return data;
    } catch (err) {
        console.log(err);
    }
}

const getDummyDataObject = (detail) => {
    try {
        let dummyData = dataD.dummyData;
        let data = {};

        /**
         * fetch the parameter with the config file of db
         */
        JSON.parse(JSON.stringify(dummyData), (key, value) => {
            for (let i in detail) {
                if (Array.isArray(detail[i])) {
                    let dummyDetails;
                    for (let j in detail[i]) {
                        if (detail[i][j].includes(".")) {
                            var index = detail[i][j].indexOf(".");
                            var id = detail[i][j].substr(0, index)
                            var text = detail[i][j].substr(index + 1);
                            dummyDetails = fakerData(key, value, text);
                            // if (dummyDetails) {
                            //     // data.push(dummyDetails);
                            //     data[id[text]] = faker.fake(dummyDetails);
                            // }
                        } else {
                            dummyDetails = fakerData(key, value, detail[i][j])
                        }
                        if (dummyDetails) {
                            // data.push(dummyDetails);
                            data[detail[i][j]] = faker.fake(dummyDetails);
                        }
                    }
                } else {
                    let dummyData
                    if (detail[i].includes(".")) {
                        var index = detail[i].indexOf(".");
                        var id = detail[i].substr(0, index)
                        var text = detail[i].substr(index + 1);
                        dummyData = fakerData(key, value, text);
                        // if (dummyData) {
                        //     data[id[text]] = faker.fake(dummyData);
                        // }
                    } else {
                        dummyData = fakerData(key, value, detail[i]);
                    }
                    if (dummyData) {
                        data[detail[i]] = faker.fake(dummyData);
                    }
                }
            }
        });
        return data;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getDummyData,
    getDummyDataObject
}