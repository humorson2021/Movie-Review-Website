const express = require('express');
const router = express.Router();
const axios = require('axios');
const {saveToDB, readAll, readOneDocument} = require('../db.js');
const path = require('path');
const {ObjectId} = require("mongodb");

router.get('/newtask', function (req, res) {
     res.sendFile(path.join(__dirname, '../public', 'newtask.html'));
     //res.sendFile('../public/newtask.html');
});

router.post('/', async function(req, res) {
    try{
        console.log(req.body);
        await saveToDB(req.body);
        //res.json(req.body);
        res.redirect('/tasks');
//     const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
//     res.json(response.data);
    }
    catch(err) {
        console.log(err.code);
    }
});

router.get('/', async function(req, res) {
    try {
        const data = await readAll();
        res.json(data);
    } catch(err) {
        console.log(err);
    }
//     // res.send('<h1>List of all the tasks!</h1>')
//     // axios.get('https://jsonplaceholder.typicode.com/todos/')
//     // .then((response)=> {res.json(response.data);})
//     // .catch((err)=> {console.log(err.code)})
    //fake one
})

router.get('/:taskId', async function(req, res) {
    try {
        const data = await readOneDocument({_id: ObjectId(req.params.taskId)});
        //require OI from mongodb
        // res.json(data);
        res.render('task.pug', {
            id:req.params.taskId,
            title: data.title,
            date: data.date
        })
    } catch (err) {
        console.log(err.code);
    }
    // console.log(req.params);
    // // res.send(`You are viewing task ${req.params.taskId}`)
    // axios.get(`https://jsonplaceholder.typicode.com/todos/${req.params.taskId}`)
    // .then((response)=> {
    //     // res.json(response.data);
    //     console.log(response.data);
    //     res.render('task.pug', {
    //         id: req.params.taskId, 
    //         title: response.data.title, 
    //         completed: response.data.completed})
    // })
    // .catch((err)=> {console.log(err.code)})
    // // res.render('task.pug', {id:req.params.taskId})
});

router.get('/:taskId/user/:username', (req, res) => {
    console.log(req.params);
    res.send(`You are viewing task ${req.params.taskId} 
             and ${req.params.username} is responsible for it`)
});

module.exports = router;