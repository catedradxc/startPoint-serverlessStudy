
const getOptions = async(event) =>{ 
    
    const body =  {
        "_links": {
            "self": {
              "href": "https://ngxts8ak75.execute-api.eu-central-1.amazonaws.com/notes",
              "methods": ["GET", "POST"] 
            }
          },
        "create-note": {
            "href": "https://ngxts8ak75.execute-api.eu-central-1.amazonaws.com/notes",
            "type": "application/hal+json"
        },
        "list-notes":{
            "href": "https://ngxts8ak75.execute-api.eu-central-1.amazonaws.com/notes",
            "type": "application/hal+json"
        },
        "note-schema":{
            "$schema": "https://json-schema.org/draft/2019-09/schema",
            "$id": "http://example.com/example.json",
            "type": "object",
            "default": {},
            "title": "Root Schema",
            "required": [
                "id",
                "note"
            ],
            "properties": {
                "id": {
                    "type": "string",
                    "default": "",
                    "title": "The id Schema",
                    "examples": [
                        "5b51a4b4-137e-4946-bbfc-f0cc140a8cdb"
                    ]
                },
                "note": {
                    "type": "string",
                    "default": "",
                    "title": "The note Schema",
                    "examples": [
                        "a note example"
                    ]
                }
            },
            "examples": [{
                "id": "5b51a4b4-137e-4946-bbfc-f0cc140a8cdb",
                "note": "a note example"
            }]
        }
            
        
    }

    return {
        status: 200,
        body: body
    }
}

module.exports = {
    getOptions
}