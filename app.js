const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'mysqladm',
    password: 'yoti1573',
    database: 'booksstore'
});

// Connect to the database
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database!');
});

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '')));

// Serve index.html on the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/books', (req, res) => {
    const query = 'SELECT * FROM new_books';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching books:', err);
            res.status(500).json({ error: 'Internal server error' });
            return;
        }
        res.json(results);
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});