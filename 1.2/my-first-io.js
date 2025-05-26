const fs = require('fs')

const filePath = process.argv[2];
const contents = fs.readFileSync(filePath);
const text = contents.toString();
const lines = text.split('\n');
const lineCount = lines.length - 1;
console.log(lineCount);