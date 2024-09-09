const mongoose = require('mongoose')

const mongoURL = 'mongodb://127.0.0.1:27017/basic'

mongoose.connect(mongoURL,{
    // useNewUrlparser : true,
    // useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log('Connected to mongoDB Server');  
})

db.on('error', (err) => {
    console.log('mongoDB connected to error', err);  
})

db.on('disconnected', () => {
    console.log(' mongoDB disconnected');  
})

exports.model = db