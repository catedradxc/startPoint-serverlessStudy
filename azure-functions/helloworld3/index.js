module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const num1 = (req.query.num1 || (req.body && req.body.num1));
    const num2 = (req.query.num2 || (req.body && req.body.num2));
    var result = new Number(num1) + new Number(num2)
    const responseMessage = {
        result: result
    }

    context.res = {
        // status: 200, /* Defaults to 200 */
        status: 200,
        body: responseMessage
    };
}