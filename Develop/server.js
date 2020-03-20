const express = require('express');

const path = require('path');
const app = express();

// If we are in production (Heroku), process.env.PORT is true, 
// If we are in development it is false, default to 3000
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});



app.use(express.static('public'));

app.listen(PORT);