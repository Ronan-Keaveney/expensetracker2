const express = require('express');
const router = express.Router();
const Category = require('../models/category.model');

// Add a new category
router.post('/', async (req, res) => {
  const category = new Category({ name: req.body.name, user: req.userId });
  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
    try {
      const userId = req.userId;
      const categories = await Category.find({ userId: userId });
      res.json(categories);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

module.exports = router;
