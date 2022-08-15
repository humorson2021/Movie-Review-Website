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
        } catch (err) {
            console.log(err);
        }
    },


    saveToDB: async function saveToDB(movie) {
        try {
            const result = await client.db("cs5610").collection("movies").insertOne(movie);
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
    },

    updateOne: async function updateOne(filter, operator) {
        try {
            const result = await client.db("cs5610").collection("movies").updateOne(filter, operator);
            return result;
        }
        catch (err) {
            console.log(err);
        }
    },
    deleteOne: async function deleteOne(filter) {
        try {
            const result = await client.db("cs5610").collection("movies").deleteOne(filter);
            return result;
        }
        catch (err) {
            console.log(err);
        }
    },

    readAllWebsites: async function readAllWebsites() {
        try {
            const cursor = await client.db("cs5610").collection("movie_websites").find();
            const data = cursor.toArray();
            return data;
        } catch (err) {
            console.log(err);
        }
    },

    readAllSources: async function readAllSources() {
        try {
            const cursor = await client.db("cs5610").collection("movie_resources").find();
            const data = cursor.toArray();
            return data;
        } catch (err) {
            console.log(err);
        }
    },

    saveComment: async function saveComment(query, update) {
        try {
            const result = await client.db("cs5610").collection("movies").updateOne(query, {$push:update});
            return result;
        } catch (err) {
            console.log(err);
        }
    },

    // readComment: async function readComment(query) {
    //     try {
    //         const cursor = await client.db("cs5610").collection("movie_comments").findOne(query);
    //         const data = cursor.toArray();
    //         return data;
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
}