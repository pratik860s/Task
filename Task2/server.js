// Import required modules
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();
const port = 3001; // Port for the server

// MySQL database connection configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
});

// Connect to the MySQL database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to the MySQL database');
});

// Middleware to parse JSON bodies
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());


// Route to add a new note
app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    const sql = 'INSERT INTO notes (title, content) VALUES (?, ?)';
    db.query(sql, [title, content], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ message: 'Note added successfully' });
    });
});

// Route to retrieve all notes
app.get('/notes', (req, res) => {
    const sql = 'SELECT * FROM notes';
    db.query(sql, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json(results);
    });
});

// Route to delete a note by ID
app.delete('/notes/:id', (req, res) => {
    const noteId = req.params.id;
    const sql = 'DELETE FROM notes WHERE id = ?';
    db.query(sql, [noteId], (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    });
});



// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
