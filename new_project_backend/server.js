const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const client = require('./db/db'); // Adjust the path according to your folder structure


const app = express();
const port = 5000; // Ensure this matches the port you intend to use

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(cors());

// Root route to check if the server is running
app.get('/', (req, res) => {
    res.send('Hello World');
});




// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
