// db/db.js
const { Pool } = require('pg');

// Create a new pool instance
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'andrea',
  password: 'Newbank1234',
  port: 5432,
});


// Function to fetch data from the database
const fetchAllData = async () => {
  try {
    const client = await pool.connect();
    const res = await client.query('SELECT * FROM workshop1');
    client.release();
    return res.rows;
  } catch (err) {
    console.error("errore in the database",err);
    throw err;
  }
};

module.exports = { fetchAllData };
