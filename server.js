const http = require('http');

// Define the port and hostname
const hostname = '127.0.0.1'; // Localhost
const port = 3001;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Basic routing logic
  if (req.url === '/') {
      res.end('Hello World! This is the home page.\n');
  } else if (req.url === '/about') {
      res.end('This is the about page.\n');
  } else {
      res.statusCode = 404;
      res.end('Page not found.\n');
  }
});

// Listen for requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
