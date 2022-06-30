var express = require('express');
var router = express.Router();
const db = require('../db.js');
const path = require('path');
const {ObjectId} = require("mongodb");
const { title } = require('process');

router.get('/newmovie', function (req, res) {
  res.render('form');
  // res.sendFile('newmovie.html');
  res.sendFile(path.join(__dirname, '../public', 'newmovie.html'));
});

router.post('/', async function(req, res) {
  try{
      console.log(req.body);
      await db.saveToDB(req.body);
      res.redirect('/');
  }
  catch(err) {
      console.log(err.code);
  }
});

// router.get('/', async function(req, res) {
//   try {
//       const movies = await db.readAll();
//       res.render('index', {movies: movies})
//   } catch(err) {
//       console.log(err);
//   }
// })

router.get('/movies', async function(req, res) {
  try {
      const movies = await db.readAll();
      res.json(movies);
  } catch(err) {
      console.log(err);
  }
})

router.get('/:movieTitle', async function(req, res) {
  try {
      const movie = await db.readOneDocument({title: req.params.movieTitle});
      console.log(req.params.movieTitle);
      res.json(movie);
  //     res.render('movie', movie);
  } catch(err) {
      console.log(err);
  }
})

router.post('/comment/:movieTitle', async function(req, res) {
    try {
        const change = {comments:req.body.comments};
        console.log(change);
        const comments = await db.saveComment({title: req.params.movieTitle}, change);
        res.json(comments);
    //     res.render('movie', movie);
    } catch(err) {
        console.log(err);
    }
  }
)

// router.get('/getcomment/:movieTitle', async function(req, res) {
//   try {
//       const comments = await db.readComment({movie: req.params.movieTitle});
//       res.json(comments);
//   //     res.render('movie', movie);
//   } catch(err) {
//       console.log(err);
//   }
// }
// )

// router.get('/movieWebsites', async function(req, res) {
//   try {
//       const movieWebsites = await db.readAllWebsites();
//       res.json(movieWebsites);
//   } catch(err) {
//       console.log(err);
//   }
// })

// router.get('/movieSources', async function(req, res) {
//   try {
//       const movieWebsites = await db.readAllSources();
//       res.json(movieWebsites);
//   } catch(err) {
//       console.log(err);
//   }
// })






module.exports = router;
