const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) =>{
    // res.send('Welcome to Our Server')
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get('/contact', (req, res) =>{
    res.send('<h1>Welcome to Contact Page</h1>')    
})
app.listen(3000, () => {
    console.log('Server Started On Port 3000');
})