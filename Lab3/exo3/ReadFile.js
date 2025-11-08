const fs = require('fs')


const data = fs.readFileSync('./newtxt.txt', 'utf8');
console.log(data);