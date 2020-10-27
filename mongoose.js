const mongoose = require('mongoose');

// for mongoose the dbName is part of the url
let dbName = 'monthly-revenue'
const url = `mongodb://127.0.0.1:27017/${dbName}`

mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

const db = mongoose.connection;
db.once('open', _=> {
    console.log(`Connected to db using mongoose`)
    console.log(`URL: ${url}`)
})

db.on('error', err=> console.log(err));