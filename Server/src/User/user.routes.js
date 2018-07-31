var express = require('express');
var router = express.Router();
var userController = require('./user.controller');

router.get('/', (req,res)=> {
    userController.getAll().then((data) => {
        res.status(data.status).send(JSON.stringify(data.users));
    })
})

module.exports = router;