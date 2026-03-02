// JavaScript file for SCA tool testing with dependencies

// Using super-tiny-icons - Simple SVG icons
const path = require('path');
const fs = require('fs');

console.log('=== SCA Tool Test Project - Dependencies Demo ===');
console.log('This project uses super-tiny-icons\n');

// Example: Using super-tiny-icons to list some available icons
const iconsDir = path.join(require.resolve('super-tiny-icons/package.json'), '../images/svg');
try {
  const icons = fs.readdirSync(iconsDir).slice(0, 3);
  icons.forEach(icon => {
    console.log(`Icon: ${icon}`);
  });
} catch (err) {
  console.error(`Failed to read icons: ${err.message}`);
}

console.log('\n=== super-tiny-icons loaded successfully ===');
console.log('Dependencies: super-tiny-icons');
