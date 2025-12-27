// JavaScript file with 10 dependencies for SCA tool testing

// Original 5 dependencies:
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

// Additional 5 dependencies:
// Dependency 6: uuid - unique identifier generator
const { v4: uuidv4 } = require('uuid');

// Dependency 7: chalk - terminal string styling
const chalk = require('chalk');

// Dependency 8: validator - string validation
const validator = require('validator');

// Dependency 9: bcrypt - password hashing
const bcrypt = require('bcrypt');

// Dependency 10: jsonwebtoken - JWT token handling
const jwt = require('jsonwebtoken');

// Sample usage of the dependencies
const app = express();

// Using lodash to manipulate data
const data = [1, 2, 3, 4, 5];
const doubled = _.map(data, num => num * 2);
console.log('Doubled array:', doubled);

// Using moment for date formatting
const now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log('Current time:', now);

// Using uuid to generate unique identifiers
const sessionId = uuidv4();
console.log(chalk.blue('Generated session ID:'), chalk.yellow(sessionId));

// Using validator to validate strings
const testEmail = 'test@example.com';
console.log(chalk.green('Email validation:'), validator.isEmail(testEmail));

// Using bcrypt to hash passwords (async example)
async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

// Using jsonwebtoken to create tokens
const token = jwt.sign({ userId: sessionId }, 'secret-key', { expiresIn: '1h' });
console.log(chalk.magenta('Generated JWT:'), token.substring(0, 20) + '...');

// Using express to create a simple route
app.get('/', (req, res) => {
  res.json({
    message: 'Hello from scatool-test-project!',
    time: moment().format('YYYY-MM-DD HH:mm:ss'),
    data: _.shuffle([1, 2, 3, 4, 5]),
    sessionId: uuidv4(),
    token: jwt.sign({ data: 'sample' }, 'secret', { expiresIn: '1h' })
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
