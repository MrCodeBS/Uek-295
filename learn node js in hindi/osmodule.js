const { console } = require('inspector');
const os = require('os');

console.log(os.freemem()); 
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.homedir());