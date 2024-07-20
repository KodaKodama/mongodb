const express = require('express');
const app = express();
const {dbConnection} = require('./database');

app.get('/', async(req, res)=> {
    try{
        const db = await dbConnection();
        const collection = db.collection('users');
        const users = await collection.find().toArray();
        res.json(users)
    }catch(e){
        console.log(e);
    }
})

app.use(express.json());

app.post('/users', async(req, res)=> {
    console.log(req.body);
    const db = await dbConnection();
    const collection = db.collection('users');
    let result = collection.insertOne(req.body);
    res.json("updated")
});

app.put('/users/:username', async(req, res)=> {
    const db = await dbConnection();
    const collection = db.collection('users');
    let singledata = await collection.updateOne({username: req.params.username}, {$set: req.body});
    res.json(singledata)
});

app.delete('/users/:username', async(req, res)=> {
    const db = await dbConnection();
    const collection = db.collection('users');
    let deletedData = await collection.deleteOne({username: req.params.username});
    res.json(deletedData)
});


app.listen(3000);