import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Grid,
} from '@mui/material';

function WorkshopForm() {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    description: '',
    hours: '',
    guests: '',
    price: '',
    address: '',
    hostname: '',
    cellnumber: '',
    level: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
  
    const response = await fetch(`/api/events`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title, date, time, description, hours, guests,
        price, address, hostname, cellnumber, level, image
      }),
    });

    if (response.ok) {
      alert('Form submitted successfully');
    } else {
      alert('Error submitting form');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h5" component="h1" gutterBottom>
          Submit Event Details
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Time"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              required
            />
          </Box>
          <Box mb={2}>
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
          </Box>
          <Box mb={2}>
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
          </Box>
          <Box mb={2}>
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
          </Box>
          <Box mb={2}>
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
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Hostname"
              name="hostname"
              value={formData.hostname}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Cell Number"
              name="cellnumber"
              value={formData.cellnumber}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Level"
              name="level"
              value={formData.level}
              onChange={handleChange}
              variant="outlined"
              required
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
              variant="outlined"
              
            />
          </Box>
          <Box mt={3}>
            <Button
              fullWidth
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}

export default WorkshopForm;
