const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: Number,
    category: String,
    availability: Boolean,
});

module.exports = mongoose.model('Menu', MenuSchema);
