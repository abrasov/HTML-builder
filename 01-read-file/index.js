const fs = require('fs');
const path = require('path');

const fullPath = path.join(__dirname, './text.txt');
const readStream = fs.createReadStream(fullPath, 'utf-8');

readStream.on('data', (chunk) => {
  console.log(chunk);
});