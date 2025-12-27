// JavaScript file with 5 vulnerable dependencies for SCA tool testing

// Dependency 1: lodash 4.17.15 - Has Command Injection and Prototype Pollution vulnerabilities
const _ = require('lodash');

// Dependency 2: axios 0.21.1 - Has DoS, SSRF, and ReDoS vulnerabilities
const axios = require('axios');

// Dependency 3: moment 2.29.1 - Has ReDoS and Path Traversal vulnerabilities
const moment = require('moment');

// Dependency 4: jsonwebtoken 8.5.1 - Has insecure key type and input validation vulnerabilities
const jwt = require('jsonwebtoken');

// Dependency 5: minimist 1.2.5 - Has Prototype Pollution vulnerability
const minimist = require('minimist');

// Sample usage of the vulnerable dependencies
console.log('=== SCA Tool Test Project - Vulnerable Dependencies Demo ===');

// Using lodash to manipulate data (vulnerable version)
const data = [1, 2, 3, 4, 5];
const doubled = _.map(data, num => num * 2);
console.log('Lodash - Doubled array:', doubled);

// Using moment for date formatting (vulnerable version)
const now = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log('Moment - Current time:', now);

// Using minimist to parse command line arguments (vulnerable version)
const args = minimist(process.argv.slice(2));
console.log('Minimist - Parsed arguments:', args);

// Using jsonwebtoken to create tokens (vulnerable version)
const token = jwt.sign({ userId: '12345', name: 'Test User' }, 'secret-key', { expiresIn: '1h' });
console.log('JWT - Generated token:', token.substring(0, 30) + '...');

// Using axios to make HTTP requests (vulnerable version)
async function fetchData() {
  try {
    const response = await axios.get('https://api.github.com/repos/ermancekic/scatool-test-project');
    console.log('Axios - Repository name:', response.data.name);
    console.log('Axios - Repository stars:', response.data.stargazers_count);
  } catch (error) {
    console.error('Axios - Error fetching data:', error.message);
  }
}

// Demonstrate more lodash functionality
const shuffled = _.shuffle([1, 2, 3, 4, 5]);
console.log('Lodash - Shuffled array:', shuffled);

// Demonstrate more moment functionality
const tomorrow = moment().add(1, 'days').format('YYYY-MM-DD');
console.log('Moment - Tomorrow\'s date:', tomorrow);

// Execute the async function
fetchData().then(() => {
  console.log('=== All dependencies loaded and tested successfully ===');
});
