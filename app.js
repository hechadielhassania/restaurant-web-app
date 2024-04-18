// app.js
const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Serve HTML for /food route
app.get('/food', (req, res) => {
    res.sendFile(__dirname + '/public/food.html');
});

// Serve HTML for /food route
app.get('/drinks', (req, res) => {
    res.sendFile(__dirname + '/public/drinks.html');
});


// Serve JSON data for /food endpoint
app.get('/food/data', (req, res) => {
    fs.readFile(__dirname + '/data/food.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Serve JSON data for /drinks endpoint
app.get('/drinks/data', (req, res) => {
    fs.readFile(__dirname + '/data/drinks.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Serve JSON data for /desserts endpoint
app.get('/desserts/data', (req, res) => {
    fs.readFile(__dirname + '/data/desserts.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal Server Error');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
