const express = require('express');
const User = require('../models/User');
const router = express.Router();

// GET all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
});

// POST a new user
router.post('/', async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const newUser = new User({ username, email, password, role });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
