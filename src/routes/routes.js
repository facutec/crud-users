const express = require('express');
const router = express.Router();
const connection = require('../database/database');

// Create
router.post('/add', (req, res) => {
  const { nombre, email, password } = req.body;
  const query = 'INSERT INTO usuarios (nombre, email, password) VALUES (?, ?, ?)';
  connection.query(query, [nombre, email, password], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('User added successfully');
    }
  });
});

// Read
router.get('/users', (req, res) => {
  const query = 'SELECT * FROM usuarios';
  connection.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

// Update
router.put('/update/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, email, password } = req.body;
  const query = 'UPDATE usuarios SET nombre = ?, email = ?, password = ? WHERE id = ?';
  connection.query(query, [nombre, email, password, id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('User updated successfully');
    }
  });
});

// Delete
router.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM usuarios WHERE id = ?';
  connection.query(query, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send('User deleted successfully');
    }
  });
});

module.exports = router;
