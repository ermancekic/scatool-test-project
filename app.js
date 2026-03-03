// JavaScript file for SCA tool testing

/**
 * Returns the name of this package.
 * @returns {string}
 */
function getName() {
  return 'scatool-test-project';
}

module.exports = { getName };

// Allow running directly: node app.js
if (require.main === module) {
  console.log('=== SCA Tool Test Project ===');
  console.log(`Package name: ${getName()}`);
}
