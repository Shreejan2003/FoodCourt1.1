const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router(); // Fix: Initialize router here

// Register
router.post('/register', async (req, res) => {
    try {
        const { username, email, password, role } = req.body;

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role,
        });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) return res.status(400).json({ message: 'Invalid password' });

        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
