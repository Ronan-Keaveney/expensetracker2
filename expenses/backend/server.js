const express = require('express');
const app = express();

const mongoose = require('mongoose');

const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true, // Enable credentials to handle sessions
    optionsSuccessStatus: 200,
    allowedHeaders: ['Content-Type', 'Authorization']
  };
app.use(express.json());
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const usersRouter = require('./routes/users');
const expensesRouter = require('./routes/expenses');
const categoriesRouter = require('./routes/categories')
app.use(cors(corsOptions));
app.use('/api/users', usersRouter);
app.use('/api/expenses', expensesRouter);
app.use('/api/categories', categoriesRouter);

app.use(express.json()); // for parsing application/json

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});