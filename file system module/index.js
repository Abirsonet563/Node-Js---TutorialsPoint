const fs = require('fs');
//Remove a |File
fs.rm('NPM', (err) => {
    if(err) throw err;
    console.log('/Delete the File');
})