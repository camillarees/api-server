'use strict';

const express = require('express');
const { orderInterface } = require('../models');
const router = express.Router();

router.get('/order', async (req, res, next) => {
    // const users = await User.findAll();
    try {
        const food = await foodInterface.read();
        res.status(200).send(food);
} catch(e){
    next(e);
}
});

router.get('/order/:id', async (req, res, next) => {
    try{
        const { id } = req.params;
        const chosenFood = await foodInterface.read({id});
        res.status(200).send(chosenFood);
    } catch(e){
        next(e);
    }
});

router.post('/order', async (req, res, next) => {
    try {
const newFood = await foodInterface.create(req.body);
res.status(200).send(newFood);
    } catch(e) {
        next(e);
    }
});

router.put('/order/:id', async (req, res, next) => {
    try {
        const updatedFood = await foodInterface.update(req.body, req.params.id)
        res.status(200).send(updatedFood);
    } catch(e) {
        next(e);
    }
})

router.delete('/order/:id', async (req, res, next) => {
    try {
    await foodInterface.destroy( req.params.id );
    res.status(200).send('item deleted');
    } catch(e){
        next(e);
    } 
})


module.exports = router;