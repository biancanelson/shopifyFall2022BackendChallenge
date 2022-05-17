const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory')




// // add new inventory
// router.post('/', async (req, res) => {

//     const inventory = {
//         name: 'fridge',
//         description : '5x7 rectangular cooling box',
//         sku: '123asd',
//         upd: 123456
//     };

//     // sending inventory to mongoDB
//     const saveInv = await inventory.save(inventory)
//     console.log(saveInv);

// });

// add new inventory
router.post('/', async (req, res) =>{
    const inventory = new Inventory({
        name: req.body.name,
        description: req.body.description,
        sku: req.body.sku,
        upd: req.body.upd
    });

    try{
        const saveInv = await inventory.save(inventory);
        res.status(201).send(saveInv);
    }catch(error){
        res.status(400).send(error);
    }


})

// get all inventory
router.get('/', async (req, res) => {
    try{
        const allInventory = await Inventory.find({});
        res.status(200).send(allInventory);
    }catch(error){
        res.status(400).send(error);
    }

});

// get a specific item
router.get('/:id', async (req, res) => {
    
})

module.exports = router;
