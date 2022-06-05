const { MongoClient } = require('mongodb');
require('dotenv').config();

//const uri = "mongodb+srv://humorson:<...>@cluster0.pdku8.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(process.env.DB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

module.exports = {
    connectToDB: async function connectToDB() {
        try {
            await client.connect();
            console.log("Connected to database");
            //this.saveToDB({task: 'this is task 1', date: 'Mon, June 6th'});
        } catch (err) {
            console.log(err);
        }
    },


    saveToDB: async function saveToDB(task) {
        try {
            const result = await client.db("cs5610").collection("tasks").insertOne(task);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    },

    readAll: async function readAll() {
        try {
            const cursor = await client.db("cs5610").collection("tasks").find();
            const data = cursor.toArray();
            return data;
        } catch (err) {
            console.log(err);
        }

    },

    readOneDocument: async function readOneDocument(query) {
        try {
            const data = await client.db("cs5610").collection("tasks").findOne(query);
            return data;
        } catch (err) {
            console.log(err);
        }
    }
}