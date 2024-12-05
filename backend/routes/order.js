const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Create Order
router.post('/', async (req, res) => {
    try {
        const { userId, items, totalPrice } = req.body;
        const newOrder = new Order({ userId, items, totalPrice });
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get All Orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find().populate('userId').populate('items.menuItemId');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update Order Status
router.patch('/:id', async (req, res) => {
    try {
        const { status } = req.body;
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.status(200).json(updatedOrder);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
