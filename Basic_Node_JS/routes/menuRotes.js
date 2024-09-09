const express = require('express')
const router = express.Router();

const Menu = require('./../models/menu')


router.post ('/', async (req,res) =>{
    try {
       const menuItems = req.body
       const newMenu = new Menu(menuItems)
       const response =  await newMenu.save()
       console.log('Menu Item Saved');
       res.status(200).json(response)
    } catch (error) {
       console.log(error);
       res.status(500).json({error: 'Error...!'})
       
    }
 })

 
 router.get('/',  async (req,res) => {
    try {
       const menudata = await Menu.find()
       res.status(200).json(menudata)
    } catch (error) {
       console.log(error);
       res.status(500).json({error: 'Error...!'})
    }

})

router.get('/:testType', async(req,res) => {
     try {
        const testType = req.params.testType;
    if( testType == "sweet" ||  testType == "spichy" ||  testType == "sour") {
        const respones = await Menu.find({taste : testType})
        res.status(200).json(respones)
    } else{
        res.status(400).json({error: "internal server error"})
    } 
     } catch (error) {
        res.status(500).json({error: "Error...!"})
     }
});

module.exports = router