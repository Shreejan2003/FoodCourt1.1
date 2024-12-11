const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config');
const authMiddleware = require('./middlewares/authMiddleware');
const errorHandler = require('./middlewares/errorHandler');
console.log(require.resolve('./middlewares/authMiddleware'));

// Environment variables setup
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/menu', require('./routes/menu')); // Menu routes
app.use('/api/user', (req, res) => res.send('User routes placeholder')); // Placeholder for user routes
app.use('/api/orders', (req, res) => res.send('Order routes placeholder')); // Placeholder for order routes
app.use('/api/notifications', (req, res) => res.send('Notification routes placeholder')); // Placeholder for notification routes
app.use('/api/auth', (req, res) => res.send('Auth routes placeholder')); // Placeholder for authentication routes

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
