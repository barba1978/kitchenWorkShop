// Route to get all data from the table
app.get('/all-data', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM your_table_name');
      res.json(result.rows);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  