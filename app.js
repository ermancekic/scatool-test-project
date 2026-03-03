// JavaScript file for SCA tool testing with dependencies

// Using super-tiny-icons - Simple SVG icons
const path = require('path');
const fs = require('fs');

const iconsDir = path.join(require.resolve('super-tiny-icons/package.json'), '../images/svg');

/**
 * Returns a list of available icon filenames from super-tiny-icons.
 * @returns {string[]} Array of icon filenames
 * @throws {Error} If the icons directory cannot be read
 */
function getIcons() {
  try {
    return fs.readdirSync(iconsDir);
  } catch (err) {
    throw new Error(`Failed to read icons directory: ${err.message}`);
  }
}

/**
 * Returns the path to the super-tiny-icons SVG directory.
 * @returns {string} Absolute path to the SVG icons directory
 */
function getIconsDir() {
  return iconsDir;
}

module.exports = { getIcons, getIconsDir };

// Allow running directly: node app.js
if (require.main === module) {
  console.log('=== SCA Tool Test Project - Dependencies Demo ===');
  console.log('This project uses super-tiny-icons\n');

  try {
    const icons = getIcons().slice(0, 3);
    icons.forEach(icon => {
      console.log(`Icon: ${icon}`);
    });
  } catch (err) {
    console.error(`Failed to read icons: ${err.message}`);
  }

  console.log('\n=== super-tiny-icons loaded successfully ===');
  console.log('Dependencies: super-tiny-icons');
}
