const express = require('express');
const mongoClient = require('mongodb').MongoClient;
// remove <> in the connection String
const connectionString = 'mongodb+srv://ricardo:ricardo00@cluster0.87d0e.mongodb.net/quoteDatabase?retryWrites=true&w=majority'
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true })); //allow express to read req.body

// use the new Server Discovery and Monitoring engine
// useUnifiedTopology: true
const options = { useUnifiedTopology: true };

mongoClient.connect(connectionString, options)
.then(client => {
    console.log('App connected to database');
    app.listen(3000, ()=> console.log('App is running on PORT 3000'));
    

    const db = client.db('useful-quotes');
    const quotes = db.collection('quotes');
    app.get('/', async (req, res) => {
        res.sendFile(__dirname + '/index.html' );
        const cursor = quotes.find().toArray()
        console.log(await cursor);
    })

    app.post('/quote', (req, res) => {
        console.log(req.body);
        quotes.insertOne(req.body).then(r => console.log(r)).catch(err => console.error(err));
    })
})
.catch(err => console.error(err))