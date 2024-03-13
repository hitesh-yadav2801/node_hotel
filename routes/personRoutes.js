const express = require('express');
const router = express.Router();
const Person = require('./../models/person')

router.post('/', async (req, res) => {
    
    try {
        const data = req.body // assuming the request body contains the person data

        // create a new person document using the mongoose model
        const newPerson = new Person(data);
        /*
        newPerson.name = data.name;
        newPerson.age = data.age; 
        newPerson.mobile = data.mobile;
        newPerson.email = data.email;
        newPerson.address = data.address;
        */

        // Save the new person to the database
        const response = await newPerson.save();
        console.log('data saved')
        res.status(200).json(response)

    } catch(error) {
        console.log(error)
        res.status(500).json({error: 'Internal server error'})
    }

})

// get method tp get the person

router.get('/', async (req, res) => {
    try{
        const data = await Person.find()
        res.status(200).json(data)
        console.log('Data fetched successfully!')
    } catch(error){
        console.log(error)
        res.status(500).json({error: 'Internal server error'})
    }
})

router.get('/:workType', async (req, res) => {
    try{
        const workType = req.params.workType;  // extract the work type from the url parameter
        if(workType == 'chef' || workType =='manager' || workType =='waiter'){
            const response = await Person.find({work : workType})
            res.status(200).json(response)
            console.log(workType + ' Data fetched successfully!')
        } else {
            res.status(404).json({error : 'Invalid work type'})
        }
    } catch(ex){
        console.log(ex)
        res.status(500).json({ex : 'Internal server error'})
    }
})

router.put('/:id', async (req, res) => {
    try{
        const personId = req.params.id;
        const updatedPersonData = req.body;

        const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
            new: true,  // return the updated document
            runValidators: true,   // Run mongoose validation
        });

        if(!response){
            return res.status(404).json({error : 'Person not found'})
        }

        console.log("Data updated successfully!")
        res.status(200).json(response)
    } catch(ex){
        console.log(ex)
        res.status(500).json({ex : 'Internal server error'})
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).json({error : 'Person not found'})
        }
        console.log("Data deleted successfully!")
        res.status(200).json({message: "Data deleted successfully!"})
    } catch(error){
        console.log(error)
        res.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router
