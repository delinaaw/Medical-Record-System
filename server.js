// server.js
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// MongoDB connection
mongoose.connect('mongodb://localhost/your_database_name', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Test route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Use routes
app.use(require('./routes/patientsRoutes'));
app.use(require('./routes/encountersRoutes'));
app.use(require('./routes/vitalsRoutes'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
