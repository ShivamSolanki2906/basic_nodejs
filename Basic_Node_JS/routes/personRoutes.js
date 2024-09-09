const express = require("express");
const routes = express.Router();

const Person = require('./../models/person')
routes.post("/", async (req, res) => {
  try {
    const data = req.body; //Assuing the request body contains the person data
    const newPerson = new Person(data); //create a new Person document using the mongoose model
    const response = await newPerson.save(); //save the new persone to use database
    console.log("Data Saved");
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error..........!" });
  }
});

routes.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("Data fecth");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error..........!" });
  }
});

routes.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "waiter" || workType == "manager") {
      const respones = await Person.find({ work: workType });
      res.status(200).json(respones);
    } else {
      res.status(404).json({ error: "internal server error" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error...!" });
  }
});


// Updata Data
routes.put('/:_id', async (req,res) => {
    try {
        const personId = req.params._id;
        const updatePersonData = req.body

        const respones = await Person.findByIdAndUpdate(personId , updatePersonData ,{
            new : true,
            runValidators : true
           
        })

        if(!respones){
            res.status(404).json({error: "Server Error....!"})
        }
      console.log("Data Updated");
        res.status(200).json(respones)
    } catch (error) {
        res.status(500).json({error : "error..!"})
    }
})


// Delete Data

routes.delete('/:id', async(req,res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId)


        if(!response){
            res.status(404).json({error: "Person Not Fond"})
        }

        res.status(200).json({massage: "Person Delete Successfully"})

    } catch (error) {
        res.status(500).json({error : "error..!"}) 
    }

})

module.exports = routes;