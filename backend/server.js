const express = require('express');
const cors = require('cors');
require('dotenv').config();
const plantRoutes = require('./routes/plants');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/plants', plantRoutes);

app.listen(8080, () => {
  console.log('PlantoPlan server is running on port 8080');
});

// db.js
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DB_DSN
});

module.exports = pool;