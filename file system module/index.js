const fs = require('fs');
//Rename File
fs.rename('greeting.txt', 'greetingNewName.txt', (err) => {
    if(err) throw err;
    console.log('Successfully Renamed This File');
} )