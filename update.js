const {dbConnection} = require('./db');

async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('users');
        const updateData = await collection.updateMany({name: "jack"}, {$set:{age:25}});
        console.log(updateData.modifiedCount);
    }catch(e){
        console.log(e);
    }
}
main();