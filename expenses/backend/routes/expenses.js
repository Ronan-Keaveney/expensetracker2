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

module.exports = router;
