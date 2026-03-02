// JavaScript file for SCA tool testing with dependencies

// Using emoji-datasource-apple - Apple emoji data source
const emojiData = require('emoji-datasource-apple');

console.log('=== SCA Tool Test Project - Dependencies Demo ===');
console.log('This project uses emoji-datasource-apple\n');

// Example: Using emoji-datasource-apple to list some emojis
const emojis = emojiData.slice(0, 3);
emojis.forEach(emoji => {
  console.log(`Emoji: ${emoji.name} (${emoji.unified})`);
});

console.log('\n=== emoji-datasource-apple loaded successfully ===');
console.log('Dependencies: emoji-datasource-apple');
