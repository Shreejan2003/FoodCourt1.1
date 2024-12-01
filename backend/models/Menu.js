const mongoose = require('mongoose');

// Define the Menu schema
const MenuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    availability: { type: Boolean, default: true },
});

// Export the Menu model
module.exports = mongoose.model('Menu', MenuSchema);
