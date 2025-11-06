/**
 * CORS Configuration
 * 
 * This configuration allows all domains to access the server.
 * You can easily modify this to restrict access to specific domains.
 */

const corsOptions = {
  // Allow all origins (use '*' or set to true)
  origin: '*',
  
  // Allowed HTTP methods
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  
  // Allowed headers
  allowedHeaders: ['Content-Type', 'Authorization'],
  
  // Allow credentials (cookies, authorization headers)
  credentials: false,
  
  // How long the results of a preflight request can be cached
  maxAge: 86400, // 24 hours
};

/**
 * Example configurations for different scenarios:
 * 
 * 1. Allow specific domains:
 *    origin: ['https://example.com', 'https://app.example.com']
 * 
 * 2. Dynamic origin validation:
 *    origin: function (origin, callback) {
 *      const allowedOrigins = ['https://example.com'];
 *      if (!origin || allowedOrigins.includes(origin)) {
 *        callback(null, true);
 *      } else {
 *        callback(new Error('Not allowed by CORS'));
 *      }
 *    }
 * 
 * 3. Allow credentials with specific origins:
 *    origin: 'https://example.com',
 *    credentials: true
 */

module.exports = corsOptions;
