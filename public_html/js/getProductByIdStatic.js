function main(args) {
    
    // Simple example on how you can return a 400 response code
    if (!args.id) {
        return {
            statusCode: 400,
            body: 'Product id cannot be empty',
            headers: { 
                'Content-Type': 'text/html'
            }
        };
    }
    
    // Simple example on how you can return a 404 response code
    if (args.id != '123') {
        return {
            statusCode: 404,
            body: 'Product ' + args.id + ' not found',
            headers: { 
                'Content-Type': 'text/html'
            }
        };
    }
    
    let product = {
        id: '123',
        name: {
            en: 'An example product name',
            fr: 'Un example de nom de produit'
        },
        description: {
            en: 'An example product description',
            fr: 'Un example de description de produit'
        },
        prices: [
            {
              currency: 'USD',
              centAmount: 1000,
              country: 'US'
            }
        ],
        createdDate: '2018-03-21T10:58:00.928Z',
        lastModifiedDate: '2018-03-21T10:58:00.928Z',
        masterVariantId: '123-1',
        variants: [
            {
              id: '123-1',
              sku: 'PROD-123-1'
            }
        ]
    };
    
    return {
        statusCode: 200,
        body: product,
        headers: { 
            'Content-Type': 'application/json'
        }
    };
}