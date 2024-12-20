const express = require('express');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

//חיבור MongoDB ל URI
const uri = 'mongodb://localhost:27017';
const dbName = 'noordb';
const collectionName = 'events';

let db;

// חיבור ל MongoDB
MongoClient.connect(uri)
  .then(client => {
    console.log('Connected to Database');
    db = client.db(dbName);
  })
  .catch(error => console.error(error));


// Serve Mevents.html at the root route
app.get('/', (req, res) => {
  console.log(path.join(__dirname, 'Mevents', 'Mevents.html')); // Log resolved path for debugging
  res.sendFile(path.join(__dirname, 'Mevents', 'Mevents.html')); // folder name
});

// form submission, הגשת אירוע חדש
app.post('/add-event', (req, res) => {
  const eventData = req.body;

  db.collection(collectionName).insertOne(eventData)
    .then(result => {
      res.status(200).json({ message: 'Event added successfully' });
    })
    .catch(error => {
      res.status(500).json({ error: error.message });
    });
});

// Serve static files
app.use(express.static(path.join(__dirname, 'Mevents')));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
