// JavaScript file for SCA tool testing with sourcemap-codec dependency

// Using @jridgewell/sourcemap-codec - A library for encoding/decoding source map mappings
const { encode, decode } = require('@jridgewell/sourcemap-codec');

console.log('=== SCA Tool Test Project - Sourcemap Codec Demo ===');

// Example 1: Encoding source map mappings
// Mappings represent the relationship between generated code and source code
// Format: [generatedCodeColumn, sourceIndex, sourceCodeLine, sourceCodeColumn]
const originalMappings = [
  // Line 0 in generated code
  [
    [0, 0, 0, 0],  // Column 0 maps to source 0, line 0, column 0
    [5, 0, 0, 5],  // Column 5 maps to source 0, line 0, column 5
  ],
  // Line 1 in generated code
  [
    [0, 0, 1, 0],  // Column 0 maps to source 0, line 1, column 0
  ],
  // Line 2 in generated code
  [
    [0, 0, 2, 0],  // Column 0 maps to source 0, line 2, column 0
    [10, 0, 2, 8], // Column 10 maps to source 0, line 2, column 8
  ]
];

console.log('\nOriginal mappings:');
console.log(JSON.stringify(originalMappings, null, 2));

// Encode the mappings into VLQ format
const encodedMappings = encode(originalMappings);
console.log('\nEncoded mappings (VLQ format):');
console.log(encodedMappings);

// Example 2: Decoding source map mappings
// Decode the previously encoded mappings back to the original format
const decodedMappings = decode(encodedMappings);
console.log('\nDecoded mappings:');
console.log(JSON.stringify(decodedMappings, null, 2));

// Example 3: Verify encoding/decoding works correctly
const isCorrect = JSON.stringify(originalMappings) === JSON.stringify(decodedMappings);
console.log('\nEncoding/Decoding verification:', isCorrect ? 'PASSED ✓' : 'FAILED ✗');

// Example 4: Demonstrate with a more complex mapping
const complexMappings = [
  [[0, 0, 0, 0], [9, 0, 0, 9], [15, 0, 0, 15]],
  [[0, 0, 1, 0], [3, 0, 1, 3], [7, 0, 1, 7], [12, 0, 1, 12]],
  [[0, 0, 2, 0]],
  [[0, 0, 3, 0], [5, 0, 3, 5]]
];

const encodedComplex = encode(complexMappings);
console.log('\nComplex encoded mappings:', encodedComplex);

const decodedComplex = decode(encodedComplex);
const isComplexCorrect = JSON.stringify(complexMappings) === JSON.stringify(decodedComplex);
console.log('Complex encoding/decoding verification:', isComplexCorrect ? 'PASSED ✓' : 'FAILED ✗');

console.log('\n=== Sourcemap codec dependency loaded and tested successfully ===');
