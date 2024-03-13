const mongoose = require('mongoose')

const menuItemSchema = new mongoose.Schema({
    itemId: {
        type: Number,
        required: true,
        unique : true
    },
    name: {
        type: String,
        required: true,
        unique : true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }
})

// create menu model

const MenuItem = mongoose.model('Menu', menuItemSchema)
module.exports = MenuItem