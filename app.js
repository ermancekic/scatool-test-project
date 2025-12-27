// JavaScript file with 5 dependencies for SCA tool testing

// Dependency 1: lodash - utility library
const _ = require('lodash');

// Dependency 2: express - web framework
const express = require('express');

// Dependency 3: axios - HTTP client
const axios = require('axios');

// Dependency 4: moment - date/time library
const moment = require('moment');

// Dependency 5: dotenv - environment variables
require('dotenv').config();

// Sample usage of the dependencies
const app = express();

// Using lodash to manipulate data
const data = [1, 2, 3, 4, 5];
const doubled = _.map(data, num => num * 2);
console.log('Doubled array:', doubled);

// Using moment for date formatting
const now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log('Current time:', now);

// Using express to create a simple route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from scatool-test-project!',
    time: moment().format('YYYY-MM-DD HH:mm:ss'),
    data: _.shuffle([1, 2, 3, 4, 5])
  });
});

// Using axios to make HTTP requests (example function)
async function fetchData() {
  try {
    const response = await axios.get('https://api.github.com/repos/ermancekic/scatool-test-project');
    console.log('Repository info:', response.data.name);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Using dotenv to access environment variables
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  fetchData();
});

module.exports = app;
