const {dbConnection} = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');
         // Drop the unique index on the 'username' field
         await collection.dropIndex('username_1');
        const data = [  { name: "john", age: 21, username: "john21" },
            { name: "jack", age: 22, username: "jack22" }]
        const insertData = await collection.insertMany(data);
        console.log(insertData);
    }catch(e){
        console.log(e);
    }
}
main();