const express = require('express');
const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'andrea',
  password: 'Newbank1234',
  port: 5432,
});

const app = express();
const port = 5000;

// Middleware to parse JSON bodies
app.use(express.json());

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
