dummyData = {
    address: {
        secondaryAddress: `{{address.secondaryAddress}}`,
        streetName: `{{address.streetName}}`,
        city: `{{address.city}}`,
        state: `{{address.state}}`,
        stateAbbr: `{{address.stateAbbr}}`,
        zipcode: `{{address.zipCode}}`,
        latitude: `{{address.latitude}}`,
        longitude: `{{address.longitude}}`,

        fullAddress: `{{address.secondaryAddress}} {{address.streetName}} {{address.city}} {{address.state}} {{address.zipCode}}`
    },

    product: {
        color: `{{commerce.color}}`,
        department: `{{commerce.department}}`,
        productName: `{{commerce.productName}}`,
        price: `{{commerce.price}}`,
        productMaterial: `{{commerce.productMaterial}}`,
        product: `{{commerce.product}}`
    },

    company: {
        companyName: `{{company.companyName}} {{company.companySuffix}}`,
        catchPhrase: `{{company.catchPhrase}}`
    },

    date: {
        past: `{{date.past}}`,
        future: `{{date.future}}`,
        recent: `{{date.recent}}`,
        month: `{{date.month}}`,
        weekday: `{{date.weekday}}`
    },

    finance: {
        accountNumber: `{{finance.account}}`,
        accountName: `{{finance.accountName}}`,
        transactionType: `{{finance.transactionType}}`,
        currencyCode: `{{finance.currencyCode}}`,
        currencyName: `{{finance.currencyName}}`,
        bitcoinAddress: `{{finance.bitcoinAddress}}`,
        iban: `{{finance.iban}}`
    },

    internet: {
        image: `{{internet.avatar}}`,
        email: `{{internet.email}}`,
        userName: `{{internet.userName}}`,
        password: `{{internet.password}}`
    },

    user: {
        prefix: `{{name.prefix}}`,
        firstName: `{{name.firstName}}`,
        middleName: `{{name.firstName}}`,
        lastName: `{{name.lastName}}`,
        suffix: `{{name.suffix}}`,
        fullName: `{{name.prefix}} {{name.firstName}} {{name.firstName}} {{name.lastName}}`,
        title: `{{name.title}}`,
        jobDescription: `{{name.jobDescriptor}}`,
        jobArea: `{{name.jobArea}}`,
        jobType: `{{name.jobType}}`,
        phoneNumber: `{{phone.phoneNumberFormat}}`,
        phoneHiddenFormat: `{{phone.phoneFormats}}`
    },

    random: {
        id: `{{random.uuid}}`
    }
}

module.exports = {
    dummyData
}