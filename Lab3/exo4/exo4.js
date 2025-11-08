const fs = require('fs')
const text = process.argv[2];
const text2 = process.argv[3];
fs.writeFileSync(text,text2)
console.log('the file has been saved');
