const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const database = require('./config/db');
const Routes = require('./routes');

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept,Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
    res.setHeader("Access-Control-Allow-Origin","http://localhost:4200");
    next();
});

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