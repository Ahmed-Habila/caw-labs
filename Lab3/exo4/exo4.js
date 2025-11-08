const fs = require('fs')
const text = process.argv[2];
fs.writeFileSync('./filer.txt',text)
console.log('the file has been saved');
