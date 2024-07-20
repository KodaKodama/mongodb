const {dbConnection} = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');
        const filter = {name: "jack"}
        const deletedData = await collection.deleteOne(filter);
        console.log(deletedData.deletedCount);
    }catch(e){
        console.log(e);
    }
}
main();