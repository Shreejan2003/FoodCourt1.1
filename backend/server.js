const express = require('express');
const connectDB = require('./config');
const dotenv = require('dotenv');
const Menu = require('./models/Menu'); // Import the Menu model

dotenv.config();
const app = express();

app.use(express.json());

connectDB();

// Test route to add a menu item
app.post('/api/menu', async (req, res) => {
    const { name, price, description, availability } = req.body;

    try {
        const newMenuItem = new Menu({ name, price, description, availability });
        const savedMenuItem = await newMenuItem.save();
        res.status(201).json(savedMenuItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
