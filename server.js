const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

app.get('/pricing', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'pricing.html'));
});
app.get('/Events', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'events.html'));
});

app.get('/Gallery', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'gallery.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


