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

### License

ISC

