// JavaScript file for SCA tool testing with dependencies

// Using axios - Promise based HTTP client
const axios = require('axios');

// Using express - Web application framework
const express = require('express');

// Using moment - Date manipulation library
const moment = require('moment');

console.log('=== SCA Tool Test Project - Dependencies Demo ===');
console.log('This project contains 3 dependencies without source code location');
console.log('for testing Software Composition Analysis (SCA) tools\n');

// Example 1: Using moment for date formatting
const now = moment();
const formattedDate = now.format('MMMM Do YYYY, h:mm:ss a');
console.log('Moment example - current date:', formattedDate);

// Example 2: Using express to create a simple app
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
console.log('Express example - web server initialized');

// Example 3: Using axios (configuration only, not making actual request)
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
console.log('Axios example - HTTP client configured');

console.log('\n=== All 3 dependencies loaded successfully ===');
console.log('Dependencies: axios, express, moment');
