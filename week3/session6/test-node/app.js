const fs = require('fs');
const util = require('util');
// const writePromise = util.promisify(fs.writeFile);
// const readPromise = util.promisify(fs.readFile);

// writePromise("data.txt", "Hey.... there!")
// .then(() => {
//     console.log("Writing is done");
//     readPromise("data.txt", "utf-8").then((data)=> {console.log(data)})
// })
// .catch((err) => {console.log(err)});
// console.log(writePromise);

fs.writeFile("data.txt", "Hello there!", (err) => {
    if (err) throw err;
    console.log("writing is done");
    fs.readFile("data.txt", "utf-8", function(err, data) {
        if (err) throw err;
        console.log(data);
})//read inside of write, otherwise async may cause problem

})

// const logger = require('./logger');
// logger.log();
// console.log(logger.version);

const express = require('express'); 
const app = express();
const port = 3000;
// const tasksRouter = require('./routes/tasks');
// app.set('view', 'views');
// app.use('/tasks', tasksRouter);
// app.use(express.static('public')); //static!


app.get('/', function(req, res) {
    res.send('Hello World!')
});
app.get('/about', function(req, res) {
    res.send('About!')
});
app.get('/tasks', function(req, res) {
    res.send('<h1>List of all the tasks!</h1>')
});

app.get('/tasks/:taskId', function(req, res) {
    console.log(req.params);
    res.send(`You are viewing task ${req.params.taskId}`)
});

app.get('/tasks/:taskId/user/:username', (req, res) => {
    console.log(req.params);
    res.send(`You are viewing task ${req.params.taskId} 
             and ${req.params.username} is responsible for it`)
});

//query
app.get('/users', (req, res) => {
    for (const key in req.query) {
        console.log(key, req.query[key])
    }
    if (!req.query.name || !req.query.course) {
        res.status(400).send("Bad Request! No!")
    } else {
        res.send(`user: ${req.query.name} takes course ${req.query.course}`)
    }
})

app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
});