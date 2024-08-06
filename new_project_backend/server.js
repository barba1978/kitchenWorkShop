const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const pool = require('./db/db');



const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000'
  }));


// Route to test the connection
app.get('/test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Route to get all data from the table
app.get('/all-data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * from workshop1');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
