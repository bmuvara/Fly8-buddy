const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/flightsearches', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Define a City model
const CitySchema = new mongoose.Schema({
  IATA_CODE: String,
  City: String
});

const City = mongoose.model('City', CitySchema);

// Define a Flight model
const FlightSchema = new mongoose.Schema({
  IATA_CODE: String,
  Name: String,
  Price: Number,
  From: String,
  To: String,
  Date: String,
  Class: String,
  Adults: Number,
  Children: Number
});

const Flight = mongoose.model('Flight', FlightSchema);

// Route to get cities
app.get('/api/cities', (req, res) => {
  City.find()
    .then(cities => res.json(cities))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Flight search route
app.post('/api/searchFlights', (req, res) => {
  const { flyingFrom, flyingTo, date, travelClass, adults, children } = req.body;

  Flight.find({  Date: date})
    .then(flights => res.json(flights))
    .catch(err => res.status(500).json({ error: err.message }));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
