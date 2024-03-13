const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/menuItem')

router.post('/', async (req, res) => {
    try{
        const menuData = req.body;
        const newMenuItem = new MenuItem(menuData);

        const response = await newMenuItem.save();
        res.status(200).json(response);
        console.log('Data saved successfully!')
    } catch(ex){
        res.status(500).json({ex : 'Internal server error'})
    }
})

router.get('/', async (req, res) => {
    try{
        const data = await MenuItem.find()
        res.status(200).json(data)
        console.log('Data fetched successfully!')
    } catch(ex){
        console.log(ex)
        res.status(500).json({ex : 'Internal server error'})
    }
})

router.get('/', async (req, res) => {
    try{
        const data = await MenuItem.find()
        res.status(200).json(data)
        console.log('Data fetched successfully!')
    } catch(ex){
        console.log(ex)
        res.status(500).json({ex : 'Internal server error'})
    }
})

router.get('/:taste', async (req, res) => {
    try{
        const taste = req.params.taste;
        if(taste == "sweet" || taste == "sour" || taste == "spice"){
            const response = await MenuItem.find({taste : taste});
            res.status(200).json(response)
            console.log('Data fetched successfully!')
        } else {
            res.status(404).json({error : 'Invalid taste'})
        } 
    
    } catch(ex){
        console.log(ex)
        res.status(500).json({ex : 'Internal server error'})
    }
})

module.exports = router
