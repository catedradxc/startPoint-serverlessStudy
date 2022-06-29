const aws = require('aws-sdk')

const getNotes = async(event) =>{ 
    const ddb = new aws.DynamoDB.DocumentClient()
    
    const result = await ddb.scan({
        TableName: 'NotesTable'
    }).promise()
    
    const body =  {
        "_links":{
            "self": { "href": "/notes" },
            "curies": [{ "name": "ea", "href": "https://ngxts8ak75.execute-api.eu-central-1.amazonaws.com/{rel}", "templated": true }],
            "ea:create": {
                "href": "/notes",
                "templated": true
            }
        },
        "totalNotes": result.Items.length,
        "_embedded": {
            "ea:notes": result.Items
        }
    }

    return {
        status: 200,
        body: body
    }
}

module.exports = {
    getNotes
}