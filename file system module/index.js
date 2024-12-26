const fs = require('fs');
//Remove a |File
fs.rm('rm.txt', (err) => {
    if(err) throw err;
    console.log('/Delete the File');
})