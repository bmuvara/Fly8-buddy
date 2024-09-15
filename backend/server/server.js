const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/flightsearchAll', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected Kuanazaa Kazi...'))
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

const Flights = mongoose.model('Flights', FlightSchema);

// Route to get cities
app.get('/api/cities', (req, res) => {
  City.find()
    .then(cities => res.json(cities))
    .catch(err => res.status(500).json({ error: err.message }));
});

/* const searchCriteria = {
  date: '2024-08-11'
};

const flights = await FlightModel.find(searchCriteria); */

/* app.post('/api/searchFlights', (req, res) => {
    console.log('Search Criteria:', req.body); 
    const searchCriteria = req.body; */
   /*  console.log('Search Criteria:', searchCriteria); 
    if (!searchCriteria || !searchCriteria.date) {
        return res.status(400).json({ message: 'Invalid search criteria' });
    }
 */
/* flight.find({

  date: searchCriteria.date
}, (err, flights) => {
  if (err) {
    return res.status(500).json({ error: 'Error fetching flights' });
  }
  res.json(flights);
}); */
/* Flight.find({ date: searchCriteria.date })
    .then(flights => {
        console.log('Filtered flights by date:', flights);
    })
    .catch(err => {
        console.error('Error:', err);
    });

}); */
// Flight search route ya ukweli

/*  app.post('/api/searchFlights', (req, res) => {
    const searchCriteria = req.body;
    Flight.find({date: searchCriteria.date})
      .then(flights =>{ 
        res.json(flights);
        console.log(flights); })
      .catch(err => res.status(500).json({ error: err.message }));
  }); */

/* 
  app.post('/api/searchFlights', (req, res) => {
    const searchCriteria = req.body;

    console.log('Search Criteria:', searchCriteria); // Check if this logs correctly

    if (!searchCriteria || !searchCriteria.date) {
        return res.status(400).json({ message: 'Invalid search criteria' });
    }

    Flight.find({
        flyingFrom: searchCriteria.flyingFrom,
        flyingTo: searchCriteria.flyingTo,
        date: searchCriteria.date,
        travelClass: searchCriteria.travelClass
    }).then(flights => {
        console.log('Filtered flights by date:', flights);
        res.json(flights);
    }).catch(err => {
        console.error('Error fetching flights:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    });
});
 */


// Add this to server.js

// Search endpoint
app.post('/api/searchFlights', async (req, res) => {
  try {
    console.log('Search Criteria:', req.body);
    const { date } = req.body;

    if (!date) {
      return res.status(400).json({ error: 'Date query parameter is required' });
    }
    const details = await Flights.findOne({date})
/* 
    // Convert the date string to a Date object
    const searchDate = new Date(date); */
    // Query MongoDB for details with the specified date
  /*   const details = await Flights.find(); */
    
   
    /* 
    console.log("Filtered flights by date:", flights); */

    if (!details ) {
      return res.status(404).json({ message: 'No details found for the provided date' });
    }

    res.json(details);
  } catch (error) {
    console.error('Error searching details:', error);
    res.status(500).json({ error: 'Server error' });
  }
});


/* app.post('/api/searchFlights', (req, res) => {
const mockCriteria = {
    flyingFrom: 'BCN',
    flyingTo: 'LHR',
    date: '2024-08-11',
    travelClass: 'economy'
};

Flight.find({
    flyingFrom: mockCriteria.flyingFrom,
    flyingTo: mockCriteria.flyingTo,
    date: mockCriteria.date,
    travelClass: mockCriteria.travelClass
}).then(flights => {
    console.log('Filtered flights by date:', flights);
    res.json(flights);
}).catch(err => {
    console.error('Error fetching flights:', err);
    res.status(500).json({ message: 'Internal Server Error' });
});

}) */
  /* app.post('/api/searchFlights', (req, res) => {
    Flight.find({date:date}, (err, flights) =>  
        if (err) {
          return res.status(500).json({ error: 'Error fetching flights' });
        };
        res.json(flights););
      });
 */

   

  /* FlightModel.find({
    flyingFrom: flyingFrom,
    flyingTo: flyingTo,
    date: date,
    Class: new RegExp(`^${travelClass}$`, 'i'), // case-insensitive match
    adults: adults.toString(),
    children: children.toString()
  }, (err, flights) => {
    if (err) {
      return res.status(500).json({ error: 'Error fetching flights' });
    }
    res.json(flights);
  }); */


/* app.post('/api/searchFlights', (req, res) => {
  const { flyingFrom, flyingTo} = req.body;

  Flight.find({ flyingFrom: flyingFrom, flyingTo: flyingTo})
    .then(flights => res.json(flights))
    .catch(err => res.status(500).json({ error: err.message }));
}); */

// Flight search route
/* app.post('/api/searchFlights', (req, res) => {
    const { flyingFrom, flyingTo, date, travelClass, adults, children } = req.body;
  
    // Construct the query
    Flight.find()
    .then(flights => {
        res.json(flights);
        console.log(flights); // Debugging: Check if flights data is being returned
    })
    .catch(err => res.status(500).json({ error: err.message }));
}); */



const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
