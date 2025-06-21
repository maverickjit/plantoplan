const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', async (req, res) => {
  const result = await db.query('SELECT * FROM plants ORDER BY next_water_date ASC');
  res.json(result.rows);
});

router.post('/', async (req, res) => {
  const { name, species, location, next_water_date, notes } = req.body;
  const result = await db.query(
    'INSERT INTO plants (name, species, location, next_water_date, notes) VALUES ($1, $2, $3, $4, $5) RETURNING *',
    [name, species, location, next_water_date, notes]
  );
  res.json(result.rows[0]);
});

module.exports = router;
