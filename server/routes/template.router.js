const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

//template route
router.get('/template', (req, res) => {
  const queryText = `SELECT * FROM table;`;
  pool.query(queryText)
      .then(result => {
        res.send(result.rows);
      })
      .catch(error => {
        console.log('ERROR MESSAGE HERE', error);
        res.sendStatus(500);
      });
});

module.exports = router;