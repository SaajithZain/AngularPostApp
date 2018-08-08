const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const database = require('./config/db');
const Routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', Routes);

app.listen('3000', (err)=>{
    if(err)
    {
        console.error(err);
        process.exit(-1);
    }
    console.log('Listening at port 3000');
})