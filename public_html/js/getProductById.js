'use strict';

const HttpClient = require('node-rest-client').Client;

// This should point to some commerce backend URL to GET product
const url = 'http://isns-dps.com:1512/rest/V1.0/list/Article/bySearch?query=(Article.SupplierAID%20in%20(';
// const url = 'http://localhost';
// after change

let sampleProductData = {
    pid: '123',
    name: 'A simple name',
    price: {
        currencyCode: 'USD',
        value: 10
    }
}

function main(args) {

    var options_auth = { user: "rest", password: "Heiler33!" };

    let httpClient = new HttpClient( options_auth);
    
    return new Promise((resolve, reject) => {
        // httpClient.get(url + args.id, function (data, response) {
        httpClient.get(url + '"' + args.id + '"))&fields=Article.SupplierAID,ArticleLang.DescriptionShort(eng,1)&metaData=true', function (data, response) {
            return resolve(buildResponse(data));
        }).on('error', function (err) {
            // To have this example working even without a valid URL, we simulate some "response" here
            return resolve(buildResponse(sampleProductData));
        });
    });
}

function buildResponse(backendProduct) {
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: mapProduct(backendProduct)
    };
}

/**
 * Example conversion of a commerce backend product into a CIF product
 * 
 * @param backendProduct The JSON product data coming from the commerce system backend.
 * @returns a CIF product.
 */
function mapProduct(backendProduct) {
    return {
        count: backendProduct.rowCount,
        id: backendProduct.rows[0].values[0],
        name: {
            en: backendProduct.rows[0].values[1]
        }
    };
}

module.exports.main = main