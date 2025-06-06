const mymodule = require('./mymodule.js'); 

const folder = process.argv[2];
const ext = process.argv[3];

mymodule(folder, ext, function (err, list) {
  if (err) {
    return console.error('There was an error:', err);
  }

  list.forEach(function (file) {
    console.log(file);
  });
});