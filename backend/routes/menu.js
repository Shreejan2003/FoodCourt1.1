const express = require('express');
const Menu = require('../models/Menu');
const router = express.Router();

// GET all menu items
router.get('/', async (req, res) => {
    try {
        const menu = await Menu.find();
        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving menu', error });
    }
});

// POST a new menu item
router.post('/', async (req, res) => {
    const { name, description, price, category, availability } = req.body;
    try {
        const newMenuItem = new Menu({ name, description, price, category, availability });
        const savedMenuItem = await newMenuItem.save();
        res.status(201).json(savedMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
