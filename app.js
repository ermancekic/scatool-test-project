// JavaScript file for SCA tool testing with vulnerable dependencies (CVSS 4.x range risks)

// Using lodash - A utility library (vulnerable version with multiple CVEs)
const _ = require('lodash');

// Using minimist - A command-line argument parser (vulnerable to prototype pollution)
const minimist = require('minimist');

// Using qs - Query string parser (vulnerable version)
const qs = require('qs');

// Using validator - String validation library (vulnerable version)
const validator = require('validator');

// Using dot-prop - Property accessor (vulnerable to prototype pollution)
const dotProp = require('dot-prop');

console.log('=== SCA Tool Test Project - Vulnerable Dependencies Demo ===');
console.log('This project contains 5 dependencies with security vulnerabilities');
console.log('for testing Software Composition Analysis (SCA) tools\n');

// Example 1: Using lodash
const array = [1, 2, 3, 4, 5];
const doubled = _.map(array, n => n * 2);
console.log('Lodash example - doubled array:', doubled);

// Example 2: Using minimist to parse command line arguments
const args = minimist(process.argv.slice(2));
console.log('Minimist example - parsed arguments:', args);

// Example 3: Using qs to parse query strings
const queryString = 'name=John&age=30&city=NYC';
const parsed = qs.parse(queryString);
console.log('QS example - parsed query:', parsed);

// Example 4: Using validator to validate email
const email = 'test@example.com';
const isValid = validator.isEmail(email);
console.log(`Validator example - "${email}" is ${isValid ? 'valid' : 'invalid'}`);

// Example 5: Using dot-prop to access nested properties
const obj = { user: { name: 'John', age: 30 } };
const userName = dotProp.get(obj, 'user.name');
console.log('Dot-prop example - user name:', userName);

console.log('\n=== All 5 vulnerable dependencies loaded successfully ===');
console.log('Dependencies: lodash, minimist, qs, validator, dot-prop');
