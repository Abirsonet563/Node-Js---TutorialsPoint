const fs = require('fs');
//Write File
fs.writeFile('greeting.txt', 'Welcome to Node |JS Part-2', (err) =>{
    if(err) throw err;
    console.log('Operation Successful');
})