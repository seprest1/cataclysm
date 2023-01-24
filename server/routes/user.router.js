const express = require('express');
const router = express.Router();
const axios = require('axios');
const pool = require('../modules/pool')

//template route
router.get('/', (req, res) => {
  console.log('hi')
  const queryText = `SELECT * FROM "user";`;
  pool.query(queryText)
      .then(result => {
        console.log(result.rows);
        res.send(result.rows);
      })
      .catch(error => {
        console.log('ERROR MESSAGE HERE', error);
        res.sendStatus(500);
      });
});

module.exports = router;