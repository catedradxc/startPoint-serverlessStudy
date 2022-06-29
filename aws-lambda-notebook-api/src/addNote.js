
const { v4 } = require('uuid')
const aws = require('aws-sdk')

const addNote = async(event) =>{

    const ddb = new aws.DynamoDB.DocumentClient()

    const { note } = JSON.parse(event.body)
    const id = v4()

    const newNote = {
        id,
        note
    }

    await ddb.put({
        TableName: 'NotesTable',
        Item: newNote
    }).promise()


    const body =  {
        "_links":{
            "self": { "href": "/notes" },
            "curies": [{ "name": "ea", "href": "https://ngxts8ak75.execute-api.eu-central-1.amazonaws.com/{rel}", "templated": true }],
            "ea:list": {
                "href": "/notes",
                "templated": true
            }
        },
        "_embedded": {
            "ea:note": JSON.stringify(newNote)
        }
    }

    return {
        status: 201,
        body: body
    }
}

module.exports = {
    addNote
}