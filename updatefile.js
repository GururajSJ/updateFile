var fs = require('fs');

fs.appendFile('update.txt', ' This is my updated text.', function (err) {
// fs.writeFile('update.txt', ' This is my updated text.', function (err) {  
  if (err) throw err;
  else
  console.log('Updated!');
});