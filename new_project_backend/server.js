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
//Ruote to get the signup
app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    // Logica per salvare il nuovo utente nel database
    res.status(201).send('User created');
  });

 //Ruote to get the Login 
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    // Logica per autenticare l'utente e generare un token JWT
    const token = generateJWT({ email });
    res.status(200).json({ token });
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
// post data to the server 
app.post('/add-data', async (req, res) => {
    const { title, date, description, hours, guests, price, address, hostname, cellnumber, level, time } = req.body;
    console.log('req.body',req.body);
    try {
      const result = await pool.query(
        `INSERT INTO workshop1 (title, date, description, hours, guests, price, address, hostname, cellnumber, level, time) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
        [title, date, description, hours, guests, price, address, hostname, cellnumber, level, time]
      );
      console.log(result);
      res.status(201).json(result.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });
  

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
