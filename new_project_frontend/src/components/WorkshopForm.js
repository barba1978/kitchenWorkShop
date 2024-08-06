import React, { useState } from 'react';
import { TextField, Button, Box, Grid, Typography } from '@mui/material';

function WorkshopForm() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    hours: '',
    guests: '',
    price: '',
    address: '',
    hostname: '',
    cellnumber: '',
    level: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/add-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log(response);
      if (response.ok) {
        console.log('Data successfully submitted!');
        // Handle successful response
      } else {
        console.error('Error submitting data');
        // Handle error response
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', p: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
      .....
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              variant="outlined"
              multiline
              rows={4}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Hours"
              name="hours"
              type="number"
              value={formData.hours}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Guests"
              name="guests"
              type="number"
              value={formData.guests}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Cell Number"
              name="cellnumber"
              type="text"
              value={formData.cellnumber}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Hostname"
              name="hostname"
              value={formData.hostname}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default WorkshopForm;
