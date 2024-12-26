const fs = require('fs'); // File System

//Create a Directory
fs.mkdir('myFolder', (err) => {
    if(err) throw err;
    console.log('File Created')
})
