// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

 



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').find({_id: new ObjectID('5bba543b7007994f8d059970')}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to set todos', err);
    // });
   
    db.collection('Users').find({name: "Tasos Bak"}).toArray().then((res) => {
        console.log('Users');
        console.log(JSON.stringify(res, undefined, 2));
    }, (err) => {
        console.log('Unable to set todos', err);
    });
    db.close();
});