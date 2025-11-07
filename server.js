const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const corsOptions = require('./config/cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Apply CORS middleware with custom configuration
app.use(cors(corsOptions));

// Configure session middleware
// app.use(session({
//   secret: process.env.SESSION_SECRET || 'your-secret-key-change-in-production',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     secure: false, // Set to true if using HTTPS
//     maxAge: 24 * 60 * 60 * 1000 // 24 hours
//   }
// }));

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Redirect middleware - runs before all routes
app.use((req, res, next) => {
  const redirectUrl = process.env.REDIRECT_URL;

  // Only redirect if:
  // 1. REDIRECT_URL is set
  // 2. User hasn't been redirected in this session yet
  // 3. This isn't a POST request (to avoid breaking form submissions)
  if (redirectUrl && req.method === 'GET') {
    // Construct the current website URL
    const protocol = req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
    const host = req.get('host');
    const currentUrl = `${protocol}://${host}`;

    // Create URL object to safely append query parameters
    const targetUrl = new URL(redirectUrl);
    targetUrl.searchParams.set('url', currentUrl);

    console.log(`First-time redirect to: ${targetUrl.toString()}`);
    // req.session.hasBeenRedirected = true;
    return res.redirect(302, targetUrl.toString());
  }

  next();
});

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
