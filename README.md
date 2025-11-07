# garbage-poc

Collective repo with POC which requires a repo to be deployed.

## Node.js Server with EJS

A basic Node.js server with Express and EJS template engine, featuring CORS support and two interactive pages.

### Features

- ✅ Express.js server
- ✅ EJS template engine for dynamic pages
- ✅ Two pages with images, text, and forms (Home and Contact)
- ✅ CORS enabled for all domains (easily configurable)
- ✅ Form submission handling with JSON responses
- ✅ Responsive design with modern CSS
- ✅ Global redirect functionality via environment variable

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd garbage-poc
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables (optional):
```bash
cp .env.example .env
# Edit .env file with your configuration
```

### Environment Variables

The server supports the following environment variables:

- `REDIRECT_URL` - If set, redirects users to this URL once per session before any page renders
- `SESSION_SECRET` - Secret key for session management (important to change in production)
- `IFRAME_URL` - URL to be embedded in the home page iframe (defaults to https://example.com)
- `PORT` - Server port (defaults to 3000)

#### Global Redirect Feature

To enable global redirect, set the `REDIRECT_URL` environment variable:

```bash
# In your .env file or environment
REDIRECT_URL=https://your-target-domain.com
SESSION_SECRET=your-unique-secret-key-here
```

When this variable is set, users will be redirected to the specified URL **once per session** before any page content is rendered. This prevents infinite redirect loops while still ensuring users are directed to the target URL on their first visit.

The current website URL is automatically appended as a `url` query parameter to the redirect URL, allowing the destination site to know where the user came from.

**Example:**
- If `REDIRECT_URL=https://example.com/landing`
- And user visits `https://yoursite.com`
- They will be redirected to: `https://example.com/landing?url=https://yoursite.com`

**Key features of the redirect system:**
- Only redirects once per user session (tracked via session cookies)
- Only affects GET requests (POST requests for forms are not redirected)
- Session expires after 24 hours by default
- Automatically includes source URL as `url` query parameter
- Useful for maintenance mode redirects, domain migrations, or temporary redirectsTo disable the redirect, simply remove or comment out the `REDIRECT_URL` variable.

### Running the Server

Start the server:
```bash
npm start
```

The server will run on `http://localhost:3000`

### Available Pages

- **Home Page**: `http://localhost:3000/`
  - Features a welcome message, image, and a contact form

- **Contact Page**: `http://localhost:3000/contact`
  - Features contact information, image, and a detailed contact form

### CORS Configuration

CORS policies are configured to allow all domains by default. You can easily modify the CORS settings in `config/cors.js`.

**Example configurations included:**
- Allow all origins (current default)
- Allow specific domains
- Dynamic origin validation
- Credentials support

To change CORS settings, simply edit the `config/cors.js` file.

### Project Structure

```
garbage-poc/
├── config/
│   └── cors.js           # CORS configuration (easy to modify)
├── public/
│   ├── css/
│   │   └── style.css     # Stylesheet
│   └── images/
│       ├── home-image.svg
│       └── contact-image.svg
├── views/
│   ├── home.ejs          # Home page template
│   └── contact.ejs       # Contact page template
├── server.js             # Main server file
├── package.json
└── README.md
```

### API Endpoints

- `GET /` - Home page
- `GET /contact` - Contact page
- `POST /submit-home` - Handle home form submission
- `POST /submit-contact` - Handle contact form submission

Form submissions return JSON responses and log data to the console.

### Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **EJS** - Template engine
- **CORS** - Cross-Origin Resource Sharing middleware
- **express-session** - Session management for redirect tracking

### License

ISC

