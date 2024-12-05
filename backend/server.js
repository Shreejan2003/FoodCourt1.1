const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config');

dotenv.config();

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/menu', require('./routes/menu')); // Menu routes
app.use('/api/user', require('./routes/user')); // User routes
app.use('/api/orders', require('./routes/order')); // Order routes
app.use('/api/notifications', require('./routes/notification')); // Notification routes
app.use('/api/auth', require('./routes/auth')); // Authentication routes

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
