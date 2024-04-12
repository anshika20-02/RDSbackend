const express = require('express');
const mysql = require('mysql');

const app = express();

// Create a MySQL connection pool
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'database-1.cz84koeyw6qt.ap-south-1.rds.amazonaws.com',
  user: 'admin',
  password: 'Anshika0210',
  database: 'ADIT'
});

// Define a route to fetch data from the database
app.get('/data', (req, res) => {
  pool.query('SELECT * FROM student', (error, results, fields) => {
    if (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      res.json(results);
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000');
});
