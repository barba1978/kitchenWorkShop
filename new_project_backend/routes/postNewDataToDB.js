const express = require('express');
const router = express.Router();

router.put('/api/events', async (req, res) => {
  const {
    title, date, time, description, hours, guests,
    price, address, hostname, cellnumber, level, image
  } = req.body;

  const pool = req.app.get('pool');

  try {
    const result = await pool.query(
      `UPDATE events 
       SET title = $1, date = $2, time = $3, description = $4, 
           hours = $5, guests = $6, price = $7, address = $8, 
           hostname = $9, cellnumber = $10, level = $11, image = $12
       WHERE title = $1 AND date = $2`,
      [title, date, time, description, hours, guests, price, address, hostname, cellnumber, level, image]
    );
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Error updating data:', error);
    res.status(500).json({ success: false, message: 'Database error' });
  }
});

module.exports = router;
