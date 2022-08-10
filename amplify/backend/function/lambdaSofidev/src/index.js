

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const body = {
        message  : 'Hello from Lambda!'
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify(body),
        headers: {
            "Access-Control-Allow-Origin": "*",
        }
    };
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return response;
    // return {
    //     statusCode: 200,
    // //  Uncomment below to enable CORS requests
    // //  headers: {
    // //      "Access-Control-Allow-Origin": "*",
    // //      "Access-Control-Allow-Headers": "*"
    // //  }, 
    //     body: JSON.stringify('Hello from Lambda!'),
    // };
};
