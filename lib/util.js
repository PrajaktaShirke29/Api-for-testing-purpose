const dataD = require('./config');

const fakerData = (key, value, element) => {
    if (key === element) {
        return value;
    } else if (typeof (key) == "string" && key.includes(element) && typeof (value) == "string" && value.includes(element)) {
        return value;
    }
    return;
}

const getDummyData = (detail) => {
    try{
        let dummyData = dataD.dummyData;
        let data = [];
    
        /**
         * fetch the parameter with the config file of db
         */
        JSON.parse(JSON.stringify(dummyData), (key, value) => {
            for (let i in detail) {
                if (Array.isArray(detail[i])) {
                    for (let j in detail[i]) {
                        let dummyDetails = fakerData(key, value, detail[i][j])
                        if(dummyDetails){
                            data.push(dummyDetails);
                        }
                    }
                } else {
                    let dummyData = fakerData(key, value, detail[i])
                    if(dummyData){
                        data.push(dummyData);
                    }
                }
            }    
        });
        return data;
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    getDummyData
}