var express = require('express');
var router = express.Router();
const db = require('../db.js');
const path = require('path');
const {ObjectId} = require("mongodb");

/* GET home page. */
router.get('/newmovie', function (req, res) {
  res.render('form');
  res.sendFile('newmovie.html');
});

router.post('/', async function(req, res) {
  try{
      console.log(req.body);
      await db.saveToDB(req.body);
      res.redirect('/index');
  }
  catch(err) {
      console.log(err.code);
  }
});

router.get('/index', async function(req, res) {
  try {
      const movies = await db.readAll();
      res.render('index', {movies: movies})
  } catch(err) {
      console.log(err);
  }
})


module.exports = router;
