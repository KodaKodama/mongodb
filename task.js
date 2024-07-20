const {dbConnection} = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');
        const findResult = await collection.find().toArray();
        console.log(findResult);
    }catch(e){
        console.log(e);
    }
}
main();