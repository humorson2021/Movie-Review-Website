const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('<h1>List of all the tasks!</h1>')
});

router.get('/:taskId', function(req, res) {
    console.log(req.params);
    res.send(`You are viewing task ${req.params.taskId}`)
});

router.get('/:taskId/user/:username', (req, res) => {
    console.log(req.params);
    res.send(`You are viewing task ${req.params.taskId} 
             and ${req.params.username} is responsible for it`)
});

module.exports = router;