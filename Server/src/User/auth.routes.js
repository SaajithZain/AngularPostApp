'use strict'

var router = require('express')();
var controller = require('./user.controller');
var jwt = require('jsonwebtoken');
var authConfig = require('../../config/auth');

router.post('/signup',(req,res)=>{
    controller.signup(req.body).then((data)=>{
        res.status(data.status).send(data)
    })
})

router.post('/login',(req,res)=>{
    controller.login(req.body).then((data)=>{
        res.status(data.status).send(data)
    })
})

router.all('/logout', (req, res) => {
    res.status(200).send({ auth: false, token: null });
})

router.use((req, res, next) => {
    
    console.log(req.originalUrl);
    if(req.originalUrl == '/login' || req.originalUrl == '/signup' ){
        return next();
             
    }

    var token = req.headers['token'];
    if(!token) return res.status(401).send({
        auth: false,
        message: 'No token provided'
    });
    jwt.verify(token, authConfig.secret, (err, decoded)=>{
        if(err) return res.status(500)
            .send({auth: false, message: 'Failed to authenticate token'});
        next();
    })

}); 

module.exports = router;