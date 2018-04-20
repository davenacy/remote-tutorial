
	console.log('Hey!');
function main(params) {
    return {
        statusCode: 200,
        body: { 'payload' : 'Hello to ' + params.name},
        headers: { 
            'Content-Type': 'application/json'
        }
    };
}
