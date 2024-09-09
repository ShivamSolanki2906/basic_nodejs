const express = require('express')
const app = express()
const db = require('./db')

require('dotenv').config();
const bodyParser = require('body-parser')
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;


app.get('/', function (req, res) {
  res.send('Hello World...!  i am learning MERN stack Developer....!')
})

app.get('/data', (req, res) => {
    res.send([1,2,3,4,5,6,7,8,9,0])
})

app.get('/items', (req,res) => {
    const allItem = {
        name :'iphone',
        company: 'apple',
        price: 40000,
        model : "XR",
        color: "black"
    }
    res.send(allItem)
})


// Import routes file
const personData = require('./routes/personRoutes')
const menudata = require('./routes/menuRotes')

//use to  routes
app.use ('/person', personData)
app.use ('/menu', menudata)



app.listen(PORT,() => {
    console.log('listening on port 3000');
    
})
