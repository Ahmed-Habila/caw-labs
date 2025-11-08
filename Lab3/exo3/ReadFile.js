const fs = require('fs')


const data = fs.readFileSync('./filer.txt', 'utf8');
console.log(data);