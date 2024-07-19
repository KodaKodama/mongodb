const {MongoClient} = require('mongodb');  // Import MongoClient from mongodb package
const url = 'mongodb://127.0.0.1:27017';   // Define the MongoDB server URL
const client = new MongoClient(url);       // Create a new MongoClient instance
const dbName = 'mydatabase';               // Define the database name

async function main(){
    await client.connect();                // Connect to the MongoDB server
    console.log('connected to server');    // Log a message once connected
    const db = client.db(dbName);          // Get the database
    const collection = db.collection('users');  // Get the 'users' collection
    const findResult = await collection.find().toArray(); // Fetch all documents from the 'users' collection
    console.log(findResult);               // Log the fetched documents
}

main();                                    // Call the main function to execute the code
