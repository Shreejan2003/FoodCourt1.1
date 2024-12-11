const express = require('express');
const router = express.Router();
const validateMenuRequest = require('../middlewares/validateMenuRequest');
const {
    getAllMenuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
} = require('../controllers/menuController');

// Routes with middleware
router.get('/', getAllMenuItems);
router.post('/', validateMenuRequest, addMenuItem);
router.put('/:id', validateMenuRequest, updateMenuItem);
router.delete('/:id', deleteMenuItem);

module.exports = router;
