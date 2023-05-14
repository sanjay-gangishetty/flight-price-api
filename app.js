// Import required modules and JSON file
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const flights = require('./flightDetails.json');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Renders index.html
app.get('/flightprices', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Main API endpoint
app.post('/flightprices', (req, res) => {
  // Extract parameters from the request body
  const source = req.body.source;
  const destination = req.body.destination;
  const date = req.body.date;

  // Check if required parameters are missing
  if (!source || !destination || !date) {
    res.status(404).json({ error: 'Parameters are missing!' });
  }

  // Filter flights based on source, destination, and date
  const flightPrices = flights.filter(flight => {
    return (
      flight.source === source &&
      flight.destination === destination &&
      flight.date === date
    );
  });

  // If no flights are found, return an error
  if (flightPrices.length === 0) {
    res.status(404).json({ error: 'No flights found' });
  } else {
    // Prepare response with flight prices
    const response = {};
    flightPrices.forEach(flight => {
      response[flight.airline] = flight.price;
    });
    res.json(response);
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
