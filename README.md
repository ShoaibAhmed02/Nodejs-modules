# Nodejs-modules
    pm2 - #process #manager #cluster #monitoring     bcrypt - #bcrypt #hashing #password #security     crypto-js - #crypto #encryption #hash     url - #url #parser #querystring     query-string - #url #querystring #parsing     lodash - #lodash #utility #library     underscore - #underscore #utility #library    
1. bcrypt.js Package:

Description:
bcrypt.js is a popular library for hashing passwords securely in Node.js. It uses a salted hashing algorithm to protect sensitive data like passwords from being easily reversed or cracked.

Sample Code:
const bcrypt = require('bcryptjs');

// Example of hashing a password
const password = 'mySecretPassword';
bcrypt.hash(password, 10, function(err, hash) {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});

// Example of verifying a password
const hashedPassword = '$2a$10$2C5s.WMM6TA0jlhOp02mGeDDdFizbTICtcCktDKOn6J.hgmSukP7m';
bcrypt.compare('wrongPassword', hashedPassword, function(err, result) {
  if (err) {
    console.error('Error comparing passwords:', err);
  } else {
    console.log('Password match:', result); // false
  }
});

2. URL Module:

Description:
The url module is a built-in module in Node.js that provides utilities for URL parsing and formatting. It allows you to work with URLs, query parameters, and other components of a URL.

Sample Code:
const url = require('url');

const urlString = 'https://www.example.com:8080/path?query=parameter';
const parsedUrl = url.parse(urlString, true);

console.log('Protocol:', parsedUrl.protocol); // 'https:'
console.log('Host:', parsedUrl.host); // 'www.example.com:8080'
console.log('Path:', parsedUrl.pathname); // '/path'
console.log('Query:', parsedUrl.query); // { query: 'parameter' }
3. Process Module:

Description:
The process module is a built-in module in Node.js that provides information and control over the current Node.js process. It allows you to interact with the environment, handle signals, and access process-related information.

Sample Code:
// Example of getting command-line arguments
console.log('Command-line arguments:', process.argv);

// Example of getting environment variables
console.log('Environment variable:', process.env.NODE_ENV);

// Example of listening to process events
process.on('exit', (code) => {
  console.log(`Process is about to exit with code ${code}`);
});
4. HTTP Module:

Description:
The http module is a built-in module in Node.js that provides functionality for creating HTTP servers and making HTTP requests.

Sample Code (HTTP Server):
****
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

Below is the list of modules you requested along with a brief description of each and sample code examples:
1. bcrypt.js Package:

Description:
bcrypt.js is a popular library for hashing passwords securely in Node.js. It uses a salted hashing algorithm to protect sensitive data like passwords from being easily reversed or cracked.

Sample Code:

javascript

const bcrypt = require('bcryptjs');

// Example of hashing a password
const password = 'mySecretPassword';
bcrypt.hash(password, 10, function(err, hash) {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hash);
  }
});

// Example of verifying a password
const hashedPassword = '$2a$10$2C5s.WMM6TA0jlhOp02mGeDDdFizbTICtcCktDKOn6J.hgmSukP7m';
bcrypt.compare('wrongPassword', hashedPassword, function(err, result) {
  if (err) {
    console.error('Error comparing passwords:', err);
  } else {
    console.log('Password match:', result); // false
  }
});

2. URL Module:

Description:
The url module is a built-in module in Node.js that provides utilities for URL parsing and formatting. It allows you to work with URLs, query parameters, and other components of a URL.

Sample Code:

javascript

const url = require('url');

const urlString = 'https://www.example.com:8080/path?query=parameter';
const parsedUrl = url.parse(urlString, true);

console.log('Protocol:', parsedUrl.protocol); // 'https:'
console.log('Host:', parsedUrl.host); // 'www.example.com:8080'
console.log('Path:', parsedUrl.pathname); // '/path'
console.log('Query:', parsedUrl.query); // { query: 'parameter' }

3. Process Module:

Description:
The process module is a built-in module in Node.js that provides information and control over the current Node.js process. It allows you to interact with the environment, handle signals, and access process-related information.

Sample Code:

javascript

// Example of getting command-line arguments
console.log('Command-line arguments:', process.argv);

// Example of getting environment variables
console.log('Environment variable:', process.env.NODE_ENV);

// Example of listening to process events
process.on('exit', (code) => {
  console.log(`Process is about to exit with code ${code}`);
});

4. HTTP Module:

Description:
The http module is a built-in module in Node.js that provides functionality for creating HTTP servers and making HTTP requests.

Sample Code (HTTP Server):

javascript

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

5. date-fns Module:

Description:
date-fns is a popular JavaScript library for working with dates in Node.js and the browser. It provides various utility functions for parsing, formatting, and manipulating dates.

Sample Code:
const { format, addDays } = require('date-fns');

const currentDate = new Date();
const formattedDate = format(currentDate, 'yyyy-MM-dd');
console.log('Formatted Date:', formattedDate);

const futureDate = addDays(currentDate, 7);
console.log('Future Date:', futureDate);

6. Events Module:

Description:
The events module is a built-in module in Node.js that provides an Event Emitter class, allowing you to work with custom events and event-driven programming.

Sample Code:
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (arg) => {
  console.log('Event emitted with argument:', arg);
});

myEmitter.emit('event', 'Custom data');
