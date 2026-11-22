const express = require('express');
const app = express();

// Story 2
app.get('/', (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// Story 3
app.get('/hobbies', (req, res) => {
  res.send('I cycle, go boating, and play guitar.');
});

// Story 4
app.get('/skills', (req, res) => {
  res.send('JavaScript, Node.js, and Express.js!');
});

// Story 5
app.get('/api/profile', (req, res) => {
  res.json({
    name: 'Camper Bot',
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  });
});

// Story 1
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});