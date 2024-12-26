const fs = require('fs'); // File System

 //Create a Directory
// fs.mkdir('myFolder', (err) => {
//     if(err) throw err;
//     console.log('File Created')
// })

  //Creating Subdirectories
// fs.mkdir('parent/child', {recursive: true}, (err) => {
//     if(err) throw err;
//     console.log('Subdirectories Created!')
// })

//Removed Directories
fs.rmdir('./myFolder', (err) => {
    if(err) throw err;
    console.log('Removed Directory')
})