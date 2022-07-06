const fr = require('fs');

fr.readFile('read.txt', 'utf-8', (err, data) => {
    console.log(data);
})