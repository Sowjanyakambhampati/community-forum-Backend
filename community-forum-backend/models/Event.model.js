const { Schema, model} = require ("mongoose");
 const eventSchema= new Schema (
    {
        eventName : {
            type : String,
            description : String,
            unique : true,
            trim : true
        },
        firstName : {
            type : String,
            description : String
        },
        lastName : {
            type : String,
            description : String
        },
        age : {
            type : Number
        },
        contactNumber : {
            type: string,
            description: String,
            pattern: "^[+]?[0-9]{1,4}?[0-9]{7,15}$"
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            unique: true,
            lowercase: true,
            trim: true
          },



    }
 )