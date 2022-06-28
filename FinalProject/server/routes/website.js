var express = require('express');
var router = express.Router();
const db = require('../db.js');
const path = require('path');

router.get('/movieWebsites', async function(req, res) {
    try {
        const movieWebsites = await db.readAllWebsites();
        res.json(movieWebsites);
    } catch(err) {
        console.log(err);
    }
  })

  module.exports = router;