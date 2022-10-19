const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const client = new MongoClient(process.env.DB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
});

module.exports = {
    connectToDB: async function connectToDB() {
        try {
            await client.connect();
            console.log("Connected to database");
            this.saveToDB({_id: 1, title:"12 Angry Men", rate: 8.9})
            this.saveToDB({_id: 2, title:"Fight Club", rate: 8.8})
            this.saveToDB({_id: 3, title:"Inception", rate: 8.7})
        } catch (err) {
            console.log(err);
        }
    },


    saveToDB: async function saveToDB(task) {
        try {
            const result = await client.db("cs5610").collection("movies").insertOne(task);
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    },

    readAll: async function readAll() {
        try {
            const cursor = await client.db("cs5610").collection("movies").find();
            const data = cursor.toArray();
            return data;
        } catch (err) {
            console.log(err);
        }

    },

    readOneDocument: async function readOneDocument(query) {
        try {
            const data = await client.db("cs5610").collection("movies").findOne(query);
            return data;
        } catch (err) {
            console.log(err);
        }
    }
}