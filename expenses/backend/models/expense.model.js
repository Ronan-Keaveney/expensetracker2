const mongoose = require('mongoose');
const Expense = mongoose.Schema;

const expenseSchema = new Expense({
    date: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

module.exports = mongoose.model('Expense', expenseSchema, 'Expenses');
