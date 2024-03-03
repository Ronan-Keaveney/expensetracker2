const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const Expense = require('../models/expense.model'); // Import the Expense model, adjust the path as needed

// Middleware to authenticate and set `req.userId`
function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Safely extract the token
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.userId = user.id;
    next();
  });
}

router.get('/', authenticateToken, async (req, res) => {
    try {
        // Assuming the user ID is stored in req.userId after authentication
        const expenses = await Expense.find({ user: req.userId });
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', authenticateToken, async (req, res) => {
  try {
    // Assume `req.userId` is obtained from the authenticated user
    const expenseData = {
      ...req.body,
      user: req.userId
    };

    const newExpense = new Expense(expenseData);
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


router.delete('/:id', authenticateToken, async (req, res) => {
  try {
      // Find the expense by ID and user ID to ensure ownership
      const expense = await Expense.findOneAndDelete({ _id: req.params.id, user: req.userId });
      if (!expense) return res.status(404).send('No expense found with the given ID for the current user.');
      res.status(200).json('Expense deleted successfully');
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});


module.exports = router;
