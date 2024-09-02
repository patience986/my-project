const mongoose = require('mongoose');

const produceSchema = new mongoose.Schema({
    producename: {
        type: String,
        trim: true
    },
    typeofproduce: {
        type: String,
        trim: true
    },
    source: {
        type: String,
        trim: true
    },
    dateTime: {
        type: Date
    },
    tonnage: {
        type: Number
    },
    cost: {
        type: Number
    },
    branch: {
        type: String,
        trim: true
    },
    contact: {
        type: String
    },
    price: {
        type: Number
    }
});

module.exports = mongoose.model('Produce', produceSchema);
