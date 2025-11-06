const express = require('express');
const cors = require('cors');
const path = require('path');
const corsOptions = require('./config/cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Apply CORS middleware with custom configuration
app.use(cors(corsOptions));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    message: 'Welcome to our Node.js Server with EJS!',
    iframeUrl: process.env.IFRAME_URL || 'https://example.com'
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Page',
    message: 'Get in touch with us'
  });
});

// Handle form submission from home page
app.post('/submit-home', (req, res) => {
  console.log('Home form data received:', req.body);
  res.json({
    success: true,
    message: 'Home form data received successfully!',
    data: req.body
  });
});

// Handle form submission from contact page
app.post('/submit-contact', (req, res) => {
  console.log('Contact form data received:', req.body);
  res.json({
    success: true,
    message: 'Contact form submitted successfully!',
    data: req.body
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`CORS is enabled for all origins`);
});
