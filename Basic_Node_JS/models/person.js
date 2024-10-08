const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    age:{
         type: Number,
        required : true
    },
    work:{
        type: String,
        enum : ['chef', 'waiter', 'manager'],
        required : true
    },
    mobile: {
        type : Number,
        required : true
    },
    email:{
        type : String,
        unique : true,
        required: true
    },
    address:{
        type : String
    }

})

const Person = mongoose.model('Person', personSchema);
module.exports = Person