const {MongoClient} = require('mongodb');  // Import MongoClient from mongodb package
const url = 'mongodb://127.0.0.1:27017';   // Define the MongoDB server URL
const client = new MongoClient(url);       // Create a new MongoClient instance
const dbName = 'mydatabase';               // Define the database name

const dbConnection = async() => {
    try{
        await client.connect();
        console.log('connected to database');
        const db = client.db(dbName);
        return db;
    }catch(e){
        console.log(e);
    }
}
module.exports = {dbConnection}