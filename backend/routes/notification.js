const express = require('express');
const Notification = require('../models/Notification');
const router = express.Router();

// Create a Notification
router.post('/', async (req, res) => {
    try {
        const { userId, message } = req.body;
        const newNotification = new Notification({ userId, message });
        const savedNotification = await newNotification.save();
        res.status(201).json(savedNotification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get Notifications for a User
router.get('/:userId', async (req, res) => {
    try {
        const { userId } = req.params;
        const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Mark a Notification as Read
router.patch('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedNotification = await Notification.findByIdAndUpdate(id, { read: true }, { new: true });
        res.status(200).json(updatedNotification);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
