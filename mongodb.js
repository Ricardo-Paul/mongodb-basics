const MongoClient = require('mongodb').MongoClient;

let url = 'mongodb://127.0.0.1:27017'; // our default local MongoDB url
const dbName = 'monthly-revenue'; //the db we want to connect to (already created using mongo shell)
let db;

let options = { useNewUrlParser: true, useUnifiedTopology: true }
MongoClient.connect(url, options)
.then(client => {
    db = client.db(dbName);
    console.log(` Connection Succeeded `);
    console.log(`Database: ${dbName}`);
})
.catch(err => console.error(err));